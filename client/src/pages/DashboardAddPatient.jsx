import Layout from "../layout/Layout";
import { Button, Input } from "@nextui-org/react";

const DashboardAddPatient = () => {
  return (
    <Layout>
      <div className="flex p-10">
        <div className="flex-1">
          <h1 className="text-2xl text-center font-semibold mt-5">
            Add Patient
          </h1>
          <form className="px-10 py-5 flex gap-5 flex-col">
            <Input type="text" label="Name" placeholder="patient name" />
            <Input type="text" label="ID No" placeholder="patient ID" />
            <Input
              type="text"
              label="Birth Day"
              placeholder="patient Phone number"
            />
            <Input
              type="text"
              label="Phone Number"
              placeholder="patient Phone number"
            />
            <Input
              type="text"
              label="Email"
              placeholder="patient Phone number"
            />
            <Input
              type="text"
              label="Address"
              placeholder="patient Phone number"
            />
            <Input
              type="text"
              label="Password"
              placeholder="Enter your email"
            />
            <div className="flex justify-end w-full">
              <Button color="primary" className="mt-2 w-32 ">
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl text-center font-semibold mt-5">
            Patient QR Code
          </h1>
          <div className="p-10  flex items-center justify-center flex-col">
            <img
              src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
              alt="qr code"
              className="w-44 h-44 "
            />
            <div className="text-center mt-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DashboardAddPatient;
