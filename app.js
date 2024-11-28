import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {test} from "./backend/controllers/jugadores.controller.js"

dotenv.config();
mongoose.connect(process.env.url)
.then(()=>{
    console.log("si jala")
})
.catch((error)=>{
    console.log("no jala", error)
})

const app= express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("si se escucha")
})

test()