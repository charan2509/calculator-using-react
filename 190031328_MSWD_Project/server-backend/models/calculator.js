const mongoose = require('mongoose')

const CalculatorSchema = new mongoose.Schema({
        history: {
        type: String,
        required: true,
    }
});

const Calculator = mongoose.model("Calculato", CalculatorSchema)
module.exports = Calculator;