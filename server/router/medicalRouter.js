import express from "express";
import { createMedical, getMedicals, getMedicalsByPatientId } from "../controller/medicalController.js";

const medicalRouter = express.Router();

medicalRouter.get("/", getMedicals);
medicalRouter.get("/:patientid",getMedicalsByPatientId);
medicalRouter.post("/", createMedical);

export default medicalRouter;
