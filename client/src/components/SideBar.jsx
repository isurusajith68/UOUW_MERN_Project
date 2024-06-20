import {
  FaAddressCard,
  FaHouseMedical,
  FaUserGear,
  FaUserPen,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const SideBar = () => {
  const pathname = window.location.pathname;

  console.log(pathname);

  return (
    <div className="sticky left-0 top-0 bg-gray-200 h-screen w-60  flex flex-col justify-between rounded-e-lg">
      <div>
        <div className="mt-6 p-2">
          <h1 className="text-center font-bold text-2xl rounded-lg border-green-600 border-2">
            ENT Unit
          </h1>
        </div>
        <div className="flex items-center gap-5 p-1 px-4 mt-4">
          <FaUserGear size={30} />
          <div>
            <h1 className="font-semibold">Isuru Sajith</h1>
            <h2 className="text-gray-700 text-sm">Admin</h2>
          </div>
        </div>
        <div className="flex flex-col px-4 mt-4 gap-4 border-t p-2 border-white">
          <Link
            to="/dashboard"
            className={
              pathname === "/dashboard"
                ? "p-2 mt-3 flex gap-2 text-blue-600 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
                : "p-2 mt-3 flex gap-2  hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
            }
          >
            <FaHouseMedical size={20} />
            <span className="ml-2">Home</span>
          </Link>
          <Link
            to="/dashboard/add-patient"
            className={
              pathname === "/dashboard/add-patient"
                ? "p-2 flex gap-2 text-blue-600 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
                : "p-2 flex gap-2  hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
            }
          >
            <FaUserPen size={20} />
            <span className="ml-2">Registar</span>
          </Link>
          <Link
            to="/dashboard/doctor"
            className={
              pathname === "/dashboard/doctor"
                ? "p-2 flex gap-2 text-blue-600 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
                : "p-2 flex gap-2  hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
            }
          >
            <FaAddressCard size={20} />
            <span className="ml-2">Doctor</span>
          </Link>
          <Link
            to="/dashboard/add-staff"
            className={
              pathname === "/dashboard/add-staff"
                ? "p-2 flex gap-2 text-blue-600 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
                : "p-2 flex gap-2  hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
            }
          >
            <FaAddressCard size={20} />
            <span className="ml-2">Raidiology</span>
          </Link>
          <Link
            to="/dashboard/pharmacy"
            className={
              pathname === "/dashboard/pharmacy"
                ? "p-2 flex gap-2 text-blue-600 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
                : "p-2 flex gap-2  hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
            }
          >
            <FaAddressCard size={20} />
            <span className="ml-2">Pharmacist</span>
          </Link>
        </div>
      </div>
      <div className="px-4">
        <button className="bg-red-400 w-full p-2 text-white rounded-lg">
          Logout
        </button>
        <h1 className="text-center mt-4 text-gray-500 text-sm">
          © 2021 ENT Unit
        </h1>
      </div>
    </div>
  );
};
export default SideBar;
