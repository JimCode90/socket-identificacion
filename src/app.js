import express from "express";
import cors from 'cors'
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors())

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + "/public"));

export default app;