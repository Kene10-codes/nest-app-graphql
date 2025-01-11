import { Field, ObjectType, Int} from "@nestjs/graphql";
import { UserSetting } from "./UserSetting";

@ObjectType()
export class User {
  
    @Field(type => Int)
    id: number;

    @Field()
    username: string;

    @Field({nullable: false})
    displayName: string;

    @Field(type => UserSetting, {nullable: false})
    settings: UserSetting
}