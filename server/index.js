import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectMongoDB from "./db/connectMongoDB.js";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import patientRouter from "./router/patientRouter.js";
import medicalRouter from "./router/medicalRouter.js";
import { sendUsernamePassword } from "./utils/SendSMS.js";
import path from "path";
import multer from "multer";
import nodemailer from "nodemailer";
// import staffRouter from "./routers/staffRouter.js";
// import studentRouter from "./routers/studentRouter.js";
// import assessmentRouter from "./routers/assessmentRouter.js";

const app = express();
const port = 5000;
dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/patients", patientRouter);
app.use("/medical-record", medicalRouter);

connectMongoDB();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "isurusajith68@gmail.com",
    pass: "nszv pknm htuv lqzw",
  },
});

app.post("/send-email", upload.single("attachment"), (req, res) => {
  const { to, subject, text } = req.body;
  const attachment = req.file;

  const mailOptions = {
    from: "isurusajith68@gmail.com",
    to,
    subject,
    text,
    attachments: [
      {
        filename: attachment.originalname,
        content: attachment.buffer,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
