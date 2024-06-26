import express from "express";
import {
  createPatient,
  deletePatient,
  getPatientById,
  getPatients,
  updatePatient,
} from "../controller/patientController.js";

const patientRouter = express.Router();

patientRouter.get("/", getPatients);
patientRouter.get("/:id", getPatientById);
patientRouter.post("/", createPatient);
patientRouter.put("/:id", updatePatient);
patientRouter.delete("/:id", deletePatient);

export default patientRouter;
