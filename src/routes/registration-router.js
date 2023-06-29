import express from "express";
import { addRegistration } from "../controllers/registration-info-controller.js";

const registrationRouter = express.Router();

registrationRouter.post("/registration", addRegistration);

export default registrationRouter;
