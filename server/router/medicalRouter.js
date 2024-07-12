import express from "express";
import {
  createLabReport,
  createMedical,
  createMedicalXray,
  getLabReport,
  getMedicals,
  getMedicalsByPatientId,
  getMedicalXray,
  updateLabReport,
  updateMedicalXray,
} from "../controller/medicalController.js";

const medicalRouter = express.Router();

medicalRouter.get("/", getMedicals);
medicalRouter.get("/:patientid", getMedicalsByPatientId);
medicalRouter.post("/", createMedical);
medicalRouter.post("/xray", createMedicalXray);
medicalRouter.get("/xray/:patientid", getMedicalXray);
medicalRouter.put("/xray/delivered/:id", updateMedicalXray);
medicalRouter.post("/lab", createLabReport);
medicalRouter.get("/lab/:patientid", getLabReport);
medicalRouter.put("/lab/delivered/:id", updateLabReport);

export default medicalRouter;
