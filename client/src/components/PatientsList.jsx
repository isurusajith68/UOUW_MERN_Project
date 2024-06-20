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
import { useMemo, useState } from "react";
import { Patient } from "../data/patients";

const PatientsList = () => {
  const [page, setPage] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const rowsPerPage = 6;
  const pages = Math.ceil(Patient.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return Patient.slice(start, end);
  }, [page, Patient]);

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

  const handleShowMore = (patient) => {
    setSelectedPatient(patient);
    openShowMore();
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    openEdit();
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="flex justify-between p-2">
        <h1 className="text-center mt-2 font-semibold">Patients List</h1>
        <Button onPress={openModal} color="primary">
          Add Patient
        </Button>
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
            <TableColumn>First Name</TableColumn>
            <TableColumn>Last Name</TableColumn>
            <TableColumn>Phone Number</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.idNumber}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell className="flex gap-4">
                  <Tooltip content="Details">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <FaRegEye onClick={() => handleShowMore(item)} />
                    </span>
                  </Tooltip>
                  <Tooltip content="Edit user">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <FaUserEdit onClick={() => handleEdit(item)} />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <MdDeleteSweep onClick={() => handleDelete(item.id)} />
                    </span>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddPatientModel isOpen={isModalOpen} onOpenChange={onModalChange} />
      <ClickShowMore
        isOpen={isShowMoreOpen}
        onOpenChange={onShowMoreChange}
        patient={selectedPatient}
      />
      <EditPatientModel
        isOpen={isEditOpen}
        onOpenChange={onEditChange}
        selectedPatient={selectedPatient}
        setSelectedPatient={setSelectedPatient}
      />
    </div>
  );
};

export default PatientsList;
