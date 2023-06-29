import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import registrationRouter from "./routes/registration-router.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();
connectToMongo();

app.use("/api", cors(), registrationRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
