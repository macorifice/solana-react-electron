import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInstructionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
