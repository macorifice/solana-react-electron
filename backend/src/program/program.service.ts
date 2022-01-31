import { Injectable } from '@nestjs/common';
import { CreateProgramInput } from './dto/create-program.input';
import { UpdateProgramInput } from './dto/update-program.input';

@Injectable()
export class ProgramService {
  create(createProgramInput: CreateProgramInput) {
    return 'This action adds a new program';
  }

  findAll() {
    return `This action returns all program`;
  }

  findOne(id: number) {
    return `This action returns a #${id} program`;
  }

  update(id: number, updateProgramInput: UpdateProgramInput) {
    return `This action updates a #${id} program`;
  }

  remove(id: number) {
    return `This action removes a #${id} program`;
  }
}
