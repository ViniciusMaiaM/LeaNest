import { MessagesRepository } from './messages.repository';

export class MessageService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating it's own dependecies
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
