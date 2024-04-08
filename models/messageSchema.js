import { Mongoose, Types } from "mongoose";
import validator from "validator";

const messageSchema = new Mongoose.Schema({
    firstName:{
        types: String,
        required: true,
        minLength:[3,"First name must contain at least 3 characters"]
    },
    lastName:{
        types: String,
        required: true,
        minLength:[3,"Last name must contain at least 3 characters"]
    },
    email:{
        types: String,
        required: true,
        validate:[validator.isEmail,"Please provide a valid Email"]
    },
    phone:{
        types: String,
        required: true,
        minLength:[11,"Phone number must contain exact 11 digit"],
        maxLength:[11,"Phone number must contain exact 11 digit"]
    },
    message:{
        types: String,
        required: true,
        minLength:[10,"Message must contain at least 10 characters"],
        
    },
})

export const Message = Mongoose.model("Message",messageSchema);