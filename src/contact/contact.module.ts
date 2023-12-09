import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './contact.model';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Contact', schema: ContactSchema} ])],
    controllers: [ContactController],
    providers: [ContactService]
})
export class ContactModule {}
