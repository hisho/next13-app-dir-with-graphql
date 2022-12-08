import { Injectable } from '@nestjs/common';
import { CreateSendGridInput } from './dto/create-send-grid.input';
import { UpdateSendGridInput } from './dto/update-send-grid.input';

@Injectable()
export class SendGridService {
  create(createSendGridInput: CreateSendGridInput) {
    return 'This action adds a new sendGrid';
  }

  findAll() {
    return `This action returns all sendGrid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendGrid`;
  }

  update(id: number, updateSendGridInput: UpdateSendGridInput) {
    return `This action updates a #${id} sendGrid`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendGrid`;
  }
}
