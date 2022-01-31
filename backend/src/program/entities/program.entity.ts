import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Program {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
