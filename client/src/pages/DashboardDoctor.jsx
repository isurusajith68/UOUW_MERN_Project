import Layout from "../layout/Layout";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  DateRangePicker,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import React from "react";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { toast } from "react-hot-toast";
const DashboardDoctor = () => {
  const [datac, setDatac] = useState(null);
  const [scannedData, setScannedData] = useState("");
  const [scan, setScan] = useState(false);

  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal("2024-04-01T18:45:22Z"),
    end: parseAbsoluteToLocal("2024-04-01T19:15:22Z"),
  });

  const handleScan = (data) => {
    if (data) {
      setScannedData(data.text);
      fetchTicketData(data.text);
      console.log(data);
    }
  };

  const handleError = (error) => {
    console.error("QR code scan error:", error);
  };

  const fetchTicketData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/patients/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 404) {
        toast.error("Patient not found.");
      } else if (response.status === 200) {
        const data = await response.json();
        const ticket = data.patient;
        setDatac(ticket);
        toast.success("Successfully retrieved patient.");
      }
    } catch (error) {
      console.error("Error retrieving patient:", error);
      toast.success("Failed to retrieve patient.");
    }
  };

  return (
    <Layout>
      <div className="flex justify-start flex-col items-start">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-2">
            {scan && (
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "150px" }}
              />
            )}
          </div>
          {/* {scannedData && (
            <div>
              <h2>Scanned Data:</h2>
              <p>{scannedData}</p>
            </div>
          )} */}
          <button
            className="bg-blue-700 rounded-lg w-28 mt-5 hover:bg-blue-900 text-white h-10 p-2 "
            onClick={() => setScan(!scan)}
            color="primary"
          >
            {scan ? "Stop" : "Start"} Scan
          </button>
        </div>
      </div>
      <div className="flex p-10">
        <div className="flex-1">
          <h1 className="text-2xl  font-semibold text-center">
            Patient Details
          </h1>
          <div className="flex mt-5 items-center justify-center">
            {datac ? (
              <div className="flex w-[520px] gap-4 p-4 rounded-lg border-2 border-black items-center justify-center">
                <div className="flex flex-col gap-2">
                  <h1 className="">Patient Name :</h1>
                  <h1 className="">Id Number :</h1>
                  <h1 className="">Birth Day:</h1>
                  <h1 className="">Phone Number :</h1>
                  <h1 className="">Email :</h1>
                  <h1 className="">Address :</h1>
               
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-blue-500">
                    {" "}
                    {datac.firstName + " " + datac.lastName}
                  </div>
                  <div className="text-blue-500">{datac.idNumber}</div>
                  <div className="text-blue-500">
                    {new Date(datac.dob).toLocaleDateString()}
                  </div>
                  <div className="text-blue-500">{datac.phoneNumber}</div>
                  <div className="text-blue-500">{datac.email}</div>
                  <div className="text-blue-500">{datac.address}</div>
                </div>
              </div>
            ) : (
              <div className="text-blue-500">No Previous Medical Record</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-semibold mt-5">
          Medical Record
        </h1>
        <form className="px-10 py-5 flex gap-5 flex-col w-[800px]">
          <Textarea
            label="Medical Recode"
            placeholder="Enter  medical recode"
            className=""
            rows={10}
          />
          <CheckboxGroup label="" defaultValue={["blood-report", "x-ray"]}>
            <Checkbox value="blood-report">Blood Report</Checkbox>
            <Checkbox value="x-ray">X-Ray</Checkbox>
          </CheckboxGroup>

          <DateRangePicker
            fullWidth
            granularity="second"
            label="Date and time range"
            value={date}
            onChange={setDate}
          />
          <Textarea
            label="Prescription"
            placeholder="Enter prescription"
            className=""
            rows={10}
          />
          <div className="flex justify-end w-full">
            <Button color="primary" className="mt-2 w-32 ">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DashboardDoctor;
