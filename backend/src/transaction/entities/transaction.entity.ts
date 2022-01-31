import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Transaction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
