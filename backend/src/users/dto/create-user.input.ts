import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha, IsBoolean } from 'class-validator';


@InputType()
export class CreateUserInput {
    @IsAlpha()
    @Field()
    firstName: string;

    @IsAlpha()
    @Field()
    lastName: string;

    @IsBoolean()
    @Field()
    isActive: boolean;
}