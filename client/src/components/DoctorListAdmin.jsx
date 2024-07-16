import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
  Tooltip,
  Pagination,
} from "@nextui-org/react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import AddPatientModel from "../modal/AddPatientModal";
import ClickShowMore from "../modal/ClickShowMore";
import EditPatientModel from "../modal/EditPatientModal";
import { useEffect, useMemo, useState } from "react";
import { Patient } from "../data/patients";
import DeletePatientModel from "../modal/DeletePatientModel";

const DoctorListAdmin = () => {
  const [page, setPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const rowsPerPage = 6;
  const pages = Math.ceil(doctor.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return doctor?.slice(start, end);
  }, [page, doctor]);

  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onOpenChange: onModalChange,
  } = useDisclosure();

  const {
    isOpen: isShowMoreOpen,
    onOpen: openShowMore,
    onOpenChange: onShowMoreChange,
  } = useDisclosure();

  const {
    isOpen: isEditOpen,
    onOpen: openEdit,
    onOpenChange: onEditChange,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: openDelete,
    onOpenChange: onDeleteChange,
  } = useDisclosure();

  const handleShowMore = (patient) => {
    setSelectedDoctor(patient);
    openShowMore();
  };

  const handleEdit = (patient) => {
    setSelectedDoctor(patient);
    openEdit();
  };

  const handleDelete = (id) => {
    setSelectedDoctorId(id);
    openDelete();
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth");
        const data = await res.json();
        setDoctor(data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatients();
  }, []);

  console.log(doctor);

  return (
    <div>
      <div className="flex justify-between p-2">
        <h1 className="text-center mt-2 font-semibold">Doctor List</h1>
      </div>
      <div className="w-[1000px] mt-2">
        <Table
          aria-label="Example static collection table"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn>Id</TableColumn>
            <TableColumn>Username</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Phone Number</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddPatientModel isOpen={isModalOpen} onOpenChange={onModalChange} />
      <ClickShowMore
        isOpen={isShowMoreOpen}
        onOpenChange={onShowMoreChange}
        patient={selectedDoctor}
      />
      <EditPatientModel
        isOpen={isEditOpen}
        onOpenChange={onEditChange}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
      />

      <DeletePatientModel
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteChange}
        selectedDoctorId={selectedDoctorId}
        setSelectedDoctorId={setSelectedDoctorId}
      />
    </div>
  );
};

export default DoctorListAdmin;
