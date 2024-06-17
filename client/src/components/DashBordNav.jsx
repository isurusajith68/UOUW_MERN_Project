import { FaMessage, FaUserGear } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const DashBordNav = () => {
  return (
    <div>
      <nav className="bg-gray-200 p-2 rounded-lg ">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="text"
              className="p-2 rounded-lg w-72"
              placeholder="Search"
            />
            <button className="bg-blue-400 text-white p-2 rounded-lg">
              Search
            </button>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="flex gap-2 items-center text-sm">
              <FaMessage size={16} />
              Message
            </div>
            <div className="flex gap-2 items-center text-sm">
              <IoIosNotifications size={20} />
              Notification
            </div>
            <div className="flex items-center gap-5 p-1 px-4">
              <FaUserGear size={20} />
              <div>
                <h1 className="font-semibold">Isuru Sajith</h1>
                <h2 className="text-gray-700 text-sm">Admin</h2>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default DashBordNav;
