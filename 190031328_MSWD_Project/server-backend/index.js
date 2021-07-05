const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const CalculatorModel = require("./models/calculator")

app.use(express.json())
app.use(cors())
mongoose.connect(
    "mongodb+srv://charan:Charan123@calculator.ggfvf.mongodb.net/calculator?retryWrites=true&w=majority",
    {
useNewUrlParser:true,
});

app.post("/insert",async(req,res)=>{
    const history = req.body.history;
    const calculator = new CalculatorModel({ history: history});
    try{
        await calculator.save();
    }
    catch(err){
        console.log(err)
    }
})

app.get("/read",async(req,res)=>{
    CalculatorModel.find({},(err, result)=>{
        if(err){
            res.send(err)
        }

        res.send(result);
    } )
})

app.listen(3001, ()=> {

    console.log("Server is running on port 3001");
});

