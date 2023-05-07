import express  from "express";
const router =express.Router()
import KPI from "../models/KPI.js";

router.get("/kpis",async(req,res)=>{
    try{
        console.log("request reached");
        const kpis=await KPI.find()
        res.status(200).json(kpis)
    }catch(err){
        res.status(500).json({message:'Server error',error:err})
    }
})

export default router;