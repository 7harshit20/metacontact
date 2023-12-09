import { Injectable } from "@nestjs/common";
import { Contact } from "./contact.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ContactService {
     constructor(@InjectModel('Contact') private contactModel: Model<Contact>){}

     async addContact(
        name: string,
        phone: string
    ) {
        const newContact = new this.contactModel({ name, phone });
        const res = await newContact.save();
        return res.id;
    }   

    async getContact(){
        const contacts = await this.contactModel.find().exec();
        return contacts;
    }
}