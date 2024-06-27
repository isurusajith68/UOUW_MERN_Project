import mongoose from "mongoose";

const MedicalSchema = mongoose.Schema({
  patientId: {
    type: String,
    required: true,
  },
  medicalRecode: {
    type: String,
  },
  prescription: {
    type: String,
  },
  xray: {
    type: String,
  },
  bloodReport: {
    type: String,
  },
  clinicalDate: {
    type: String,
  },
  medicingDilivery: {
    type: Boolean,
    default: false,
  },
});

const Medical = mongoose.model("Medical", MedicalSchema);

export default Medical;
