import { config } from "dotenv";
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
config({path:"./config/config.env"})

// midleware

app.use(cors({
    origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods: ["GET","POST","PUT","DELETE"],
    Credentials:true,
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

dbConnection()


export default app