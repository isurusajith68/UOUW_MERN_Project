import Medical from "../model/medical.js";
import Xray from "../model/xray.js";
import { xRayDeliveredSms } from "../utils/SendSMS.js";

export const getMedicals = async (req, res) => {
  try {
    const medicals = await Medical.find();
    res.json(medicals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMedical = async (req, res) => {
  const medical = req.body;

  const patientId = req.body.patientId;

  if (!patientId) {
    return res.status(400).json({ message: "Patient ID is required" });
  }

  try {
    const exsitMedical = await Medical.findOne({ patientId });

    if (exsitMedical) {
      medical.medicingDilivery = false;

      const updatedMedical = await Medical.findOneAndUpdate(
        exsitMedical._id,
        medical,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: updatedMedical,
        message: "Medical record updated successfully",
      });
    } else {
      const newMedical = new Medical(medical);
      await newMedical.save();
      res
        .status(200)
        .json({ data: newMedical, message: "Medical record added" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getMedicalsByPatientId = async (req, res) => {
  const { patientid } = req.params;
  try {
    const medicals = await Medical.find({ patientId: patientid });

    if (medicals.length === 0) {
      return res.status(404).json({ message: "Medical record not found" });
    }

    res.json(medicals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMedicalXray = async (req, res) => {
  const { patientId, xray, xrayIssued, delivered } = req.body;

  if (!patientId) {
    return res.status(400).json({ message: "Patient ID is required" });
  }

  if (!xray) {
    return res.status(400).json({ message: "Xray is required" });
  }

  if (!xrayIssued) {
    return res.status(400).json({ message: "XrayIssued is required" });
  }
  try {
    const existMedical = await Xray.findOne({ patientId });

    const addMedicalRecord = await Xray.create({
      patientId,
      xray,
      xrayIssued,
    });
    res.json(addMedicalRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMedicalXray = async (req, res) => {
  const { patientid } = req.params;
  console.log(patientid);
  try {
    const xrayData = await Xray.find({ patientId: patientid });

    if (!xrayData) {
      return res.status(404).json({ message: "Xray not found" });
    }

    res.json(xrayData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateMedicalXray = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber } = req.body;
  console.log(id, firstName, lastName, phoneNumber);
  try {
    const xrayData = await Xray.findOne({ _id: id });

    if (!xrayData) {
      return res.status(404).json({ message: "Xray not found" });
    }

    const updatedXray = await Xray.findOneAndUpdate(
      xrayData._id,
      { delivered: true },
      {
        new: true,
      }
    );
    xRayDeliveredSms(firstName, lastName, phoneNumber);
    res.json(updatedXray);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
