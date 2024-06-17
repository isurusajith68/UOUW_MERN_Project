import { useState } from "react";
import Layout from "../layout/Layout";
import QrReader from "react-qr-scanner";
import { Button, Textarea } from "@nextui-org/react";
const DashboardParmacy = () => {
  const [scan, setScan] = useState(false);
  return (
    <Layout>
      {" "}
      <div className="flex p-10">
        <div className="flex-1">
          <h1 className="text-2xl  font-semibold text-center">Scan QR</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="mt-2">
              {scan && (
                <QrReader
                  delay={300}
                  // onError={handleError}
                  // onScan={handleScan}
                  style={{ width: "350px" }}
                />
              )}
            </div>
            <button
              className="bg-blue-700 rounded-lg w-28 mt-5 hover:bg-blue-900 text-white h-10 p-2 "
              onClick={() => setScan(!scan)}
              color="primary"
            >
              {scan ? "Stop" : "Start"} Scan
            </button>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl  font-semibold text-center">
            Prescription Details
          </h1>
          <div className="flex mt-5  justify-center">
            <div className="flex w-[520px] gap-4 p-4 rounded-lg border-2 border-black  justify-center">
              <div className="flex flex-col gap-2">
                <h1 className="">Patient Name :</h1>
                <h1 className="">Email :</h1>
                <h1>Prescription :</h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-blue-500">John Doe</div>

                <div className="text-blue-500">json68@gmail.com</div>
                <div>
                  <p className="text-blue-500">
                    1. Paracetamol 500mg - 2 times a day
                  </p>
                  <p className="text-blue-500">
                    2. Panadol 500mg - 2 times a day
                  </p>
                  <p className="text-blue-500">
                    3. Amoxicillin 500mg - 3 times a day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="px-10 py-5 flex gap-5 flex-col w-[800px]">
          <Textarea
            label="Not Available Medicines"
            placeholder="Enter Not Available Medicines"
            className=""
            rows={10}
          />

          <div className="flex justify-end w-full">
            <Button color="primary" className="mt-2 w-32 ">
              Send Email
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default DashboardParmacy;
