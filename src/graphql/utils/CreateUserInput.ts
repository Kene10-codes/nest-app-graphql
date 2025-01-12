import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserData {
    @Field()
    username: string;

    @Field({nullable: true})
    displayName?: string
}