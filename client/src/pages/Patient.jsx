import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

const PatientPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      window.location.href = "/login";
    }

    setUser(JSON.parse(user));
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center mt-40  flex-col  ">
        <h1 className="text-2xl font-bold ">Patient Details</h1>

        <div className="flex gap-5 flex-col mt-3">
          <div className=" ">
            <h1 className="text-lg font-bold">Name</h1>
            <p>{user?.username}</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Email</h1>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PatientPage;
