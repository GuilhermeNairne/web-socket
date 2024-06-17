import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/'), MessageModule],
  controllers: [],
  providers: [AppGateway, MessageModule],
})
export class AppModule {}
