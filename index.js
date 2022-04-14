import express from "express";
import { model }from"./model.js";
const app = express();


app.get('/navbar2/:bahasa', (req,res)=>{
    const parameter=req.params.bahasa;
    res.send(model(parameter));
});
app.listen(3001,()=>console.log('server hidup'));