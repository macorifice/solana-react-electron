import { Injectable } from '@nestjs/common';
import { CreateInstructionInput } from './dto/create-instruction.input';
import { UpdateInstructionInput } from './dto/update-instruction.input';

@Injectable()
export class InstructionService {
  create(createInstructionInput: CreateInstructionInput) {
    return 'This action adds a new instruction';
  }

  findAll() {
    return `This action returns all instruction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instruction`;
  }

  update(id: number, updateInstructionInput: UpdateInstructionInput) {
    return `This action updates a #${id} instruction`;
  }

  remove(id: number) {
    return `This action removes a #${id} instruction`;
  }
}
