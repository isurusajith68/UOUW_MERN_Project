import { Button, useDisclosure } from "@nextui-org/react";
import CardStarter from "../components/CardStarter";
import DoctorListAdmin from "../components/DoctorListAdmin";
import PatientsList from "../components/PatientsList";
import PatientsListAdmin from "../components/PatientsListAdmin";
import Layout from "../layout/Layout";
import AddStaffModel from "../modal/AddStaffModel";

const Dashboard = () => {
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onOpenChange: onModalChange,
  } = useDisclosure();
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col ">
        <div className=" ">
          <CardStarter />
        </div>
        <div className="flex  w-full justify-end items-end pr-[15%] mt-10">
          <Button onPress={openModal} color="primary">
            Add staff
          </Button>
        </div>
        <div className="px-10 mt-2 py-5">
          <DoctorListAdmin />
        </div>
        <div className="px-10 mt-2 py-5">
          {/* <DoctorListAdmin /> */}
        </div>
      </div>
      <AddStaffModel isOpen={isModalOpen} onOpenChange={onModalChange}  />
    </Layout>
  );
};
export default Dashboard;
