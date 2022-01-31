import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProgramInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
