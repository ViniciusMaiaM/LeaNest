import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('test');
  }

  @Post()
  // Declaring that this method will receive data from the body
  createMssages(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get(':id')
  // Declaring that a information will be extracted from the parameters of the requisition
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
