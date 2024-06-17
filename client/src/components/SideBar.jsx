import {
  FaAddressCard,
  FaHouseMedical,
  FaUserGear,
  FaUserPen,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const SideBar = () => {
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
            className="p-2 mt-3 flex gap-2 text-blue-400 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
          >
            <FaHouseMedical size={20} />
            <span className="ml-2">Home</span>
          </Link>
          <Link
            to="/dashboard/add-patient"
            className="p-2 flex gap-2 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
          >
            <FaUserPen size={20} />
            <span className="ml-2">Add Patient</span>
          </Link>
          <Link
            to="/dashboard/add-staff"
            className="p-2 flex gap-2 hover:bg-white hover:rounded-lg border border-white shadow-sm bg-white rounded-lg cursor-pointer"
          >
            <FaAddressCard size={20} />
            <span className="ml-2">Add Staff</span>
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
