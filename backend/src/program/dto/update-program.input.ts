import { CreateProgramInput } from './create-program.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramInput extends PartialType(CreateProgramInput) {
  @Field(() => Int)
  id: number;
}
