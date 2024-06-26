import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  role: {
    type: String,
    enum: [
      "registar",
      "admin",
      "doctor",
      "pharmacist",
      "laboratorist",
      "receptionist",
      "rediologist",
      "patient",
    ],
    default: "patient",
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
