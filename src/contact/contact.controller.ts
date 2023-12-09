import { Body, Controller, Post, Get } from "@nestjs/common";
import { ContactService } from "./contact.service";

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
}