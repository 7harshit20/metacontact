import { Body, Controller, Post, Get } from "@nestjs/common";
import { ContactService } from "./contact.service";
require('dotenv').config();
const {Web3} = require('web3');
const web3 = new Web3(process.env.INFURA_KEY);


@Controller('contact')
export class ContactController {
    constructor(private ContactService: ContactService){}

    @Post('add')
    async addProduct(@Body('name') name: string, @Body('phone') phone: string) {
        const genid = await  this.ContactService.addContact(name, phone);
        return {id: genid}
    }

    @Get('')
    async getProducts(){
        return {'data': await this.ContactService.getContact()}
    }

    @Post('moralisadd')
    async moralisadd(@Body() requestBody: any){
        try {
            const {logs, confirmed} = requestBody;
            // console.log("req", requestBody);
            if(confirmed) return 'Already registered'
            const hexStream = logs[0].data;
            const str = web3.utils.hexToAscii(hexStream);
            let name = "",phone = "";
            for (let i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 128) name = name + str[i];
                if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58)
                phone = phone + str[i];
            }
            // console.log('from controller', name, phone, confirmed );
            const genid = await this.ContactService.addContact(name, phone);
            return {id: genid};
        } catch (error) {
            return 'No data available';
        }
    }
}