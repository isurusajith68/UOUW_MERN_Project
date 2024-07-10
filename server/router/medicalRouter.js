import express from "express";
import {
  createMedical,
  createMedicalXray,
  getMedicals,
  getMedicalsByPatientId,
  getMedicalXray,
  updateMedicalXray,
} from "../controller/medicalController.js";

const medicalRouter = express.Router();

medicalRouter.get("/", getMedicals);
medicalRouter.get("/:patientid", getMedicalsByPatientId);
medicalRouter.post("/", createMedical);
medicalRouter.post("/xray", createMedicalXray);
medicalRouter.get("/xray/:patientid", getMedicalXray);
medicalRouter.put("/xray/delivered/:id", updateMedicalXray);

export default medicalRouter;
