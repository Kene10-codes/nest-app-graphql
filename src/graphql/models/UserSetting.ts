import { Field, Int, ObjectType } from "@nestjs/graphql"


@ObjectType()
export class UserSetting {
    @Field(type => Int)
    userId: number;

    @Field(type => Boolean, {defaultValue: false})
    receiveNotifications: boolean;

    @Field(type => Boolean, {defaultValue: false})
    receiveEmails: boolean
}