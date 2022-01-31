import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Instruction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
