import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();

@Module({
  imports: [ContactModule, MongooseModule.forRoot(process.env.DATABASE_URL)],
})
export class AppModule {}
