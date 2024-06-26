import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectMongoDB from "./db/connectMongoDB.js";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import patientRouter from "./router/patientRouter.js";

// import staffRouter from "./routers/staffRouter.js";
// import studentRouter from "./routers/studentRouter.js";
// import assessmentRouter from "./routers/assessmentRouter.js";

const app = express();
const port = 5000;
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/patients", patientRouter);
// app.use("/student", studentRouter);
// app.use("/assessment", assessmentRouter);

connectMongoDB();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
