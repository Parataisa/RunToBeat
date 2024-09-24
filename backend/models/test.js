import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});


const Test = mongoose.model("Test", testSchema);

export default Test;