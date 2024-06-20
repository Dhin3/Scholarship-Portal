import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required: true
    }
},
{timestamp:true}
);

export const person = mongoose.model("Perosn",schema);