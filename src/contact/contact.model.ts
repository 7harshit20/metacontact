import * as mongoose from "mongoose";

export const ContactSchema = new mongoose.Schema({
    name: {type: "string", required: true},
    phone: {type: "string", required: true},
})

export interface Contact extends mongoose.Document {
  id: string;
  name: string;
  phone: string;
}

