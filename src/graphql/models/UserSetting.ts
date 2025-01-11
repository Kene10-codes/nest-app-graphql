import { Field, Int, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class UserSetting {
    @Field(type => Int)
    userId: number;

    @Field(type => Boolean)
    receiveNotifications: boolean;

    @Field({defaultValue: false})
    recieveEmails: boolean
}