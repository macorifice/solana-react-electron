import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstructionService } from './instruction.service';
import { Instruction } from './entities/instruction.entity';
import { CreateInstructionInput } from './dto/create-instruction.input';
import { UpdateInstructionInput } from './dto/update-instruction.input';

@Resolver(() => Instruction)
export class InstructionResolver {
  constructor(private readonly instructionService: InstructionService) {}

  @Mutation(() => Instruction)
  createInstruction(@Args('createInstructionInput') createInstructionInput: CreateInstructionInput) {
    return this.instructionService.create(createInstructionInput);
  }

  @Query(() => [Instruction], { name: 'instruction' })
  findAll() {
    return this.instructionService.findAll();
  }

  @Query(() => Instruction, { name: 'instruction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.instructionService.findOne(id);
  }

  @Mutation(() => Instruction)
  updateInstruction(@Args('updateInstructionInput') updateInstructionInput: UpdateInstructionInput) {
    return this.instructionService.update(updateInstructionInput.id, updateInstructionInput);
  }

  @Mutation(() => Instruction)
  removeInstruction(@Args('id', { type: () => Int }) id: number) {
    return this.instructionService.remove(id);
  }
}
