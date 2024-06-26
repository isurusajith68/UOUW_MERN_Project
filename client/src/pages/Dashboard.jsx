import CardStarter from "../components/CardStarter";
import PatientsList from "../components/PatientsList";
import PatientsListAdmin from "../components/PatientsListAdmin";
import Layout from "../layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-col ">
        <div className=" ">
          <CardStarter />
        </div>
        <div className="px-10 mt-2 py-5">
          <PatientsListAdmin />
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
