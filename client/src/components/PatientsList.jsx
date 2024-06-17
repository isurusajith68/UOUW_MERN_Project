import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { CiEdit } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";

const PatientsList = () => {
  return (
    <div>
      <h1 className="text-center mt-2 font-semibold">Patients List</h1>
      <div className="w-[1000px] mt-2">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Id</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Phone Number</TableColumn>
            <TableColumn>Show More</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>20015236896v</TableCell>
              <TableCell>janith madushanka</TableCell>
              <TableCell>080-1234567</TableCell>
              <TableCell>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Show More
                </button>
              </TableCell>
              <TableCell className="flex gap-2 items-center mt-3">
                <FaDeleteLeft size={20} className="text-red-500" />
                <CiEdit size={20} className="text-blue-500" />
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>20015236896v</TableCell>
              <TableCell>janith madushanka</TableCell>
              <TableCell>080-1234567</TableCell>
              <TableCell>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Show More
                </button>
              </TableCell>
              <TableCell className="flex gap-2 items-center mt-3">
                <FaDeleteLeft size={20} className="text-red-500" />
                <CiEdit size={20} className="text-blue-500" />
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>23658745236v</TableCell>
              <TableCell>janith madushanka</TableCell>
              <TableCell>080-1234567</TableCell>
              <TableCell>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Show More
                </button>
              </TableCell>
              <TableCell className="flex gap-2 items-center mt-3">
                <FaDeleteLeft size={20} className="text-red-500" />
                <CiEdit size={20} className="text-blue-500" />
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>23658745236v</TableCell>
              <TableCell>janith madushanka</TableCell>
              <TableCell>080-1234567</TableCell>
              <TableCell>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Show More
                </button>
              </TableCell>
              <TableCell className="flex gap-2 items-center mt-3">
                <FaDeleteLeft size={20} className="text-red-500" />
                <CiEdit size={20} className="text-blue-500" />
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>23658745236v</TableCell>
              <TableCell>janith madushanka</TableCell>
              <TableCell>080-1234567</TableCell>
              <TableCell>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Show More
                </button>
              </TableCell>
              <TableCell className="flex gap-2 items-center mt-3">
                <FaDeleteLeft size={20} className="text-red-500" />
                <CiEdit size={20} className="text-blue-500" />
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>23658745236v</TableCell>
              <TableCell>janith madushanka</TableCell>
              <TableCell>080-1234567</TableCell>
              <TableCell>
                {" "}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Show More
                </button>
              </TableCell>
              <TableCell className="flex gap-2 items-center mt-3">
                <FaDeleteLeft size={20} className="text-red-500" />
                <CiEdit size={20} className="text-blue-500" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default PatientsList;
