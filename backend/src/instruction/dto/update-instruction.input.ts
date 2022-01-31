import { CreateInstructionInput } from './create-instruction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInstructionInput extends PartialType(CreateInstructionInput) {
  @Field(() => Int)
  id: number;
}
