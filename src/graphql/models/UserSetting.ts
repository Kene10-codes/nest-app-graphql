import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({name: 'user_settings'})
@ObjectType()
export class UserSetting {
    @PrimaryColumn()
    @Field(type => Int)
    userId: number;

    @Column({default: false})
    @Field(type => Boolean, {defaultValue: false})
    receiveNotifications: boolean;

    @Column({default: false})
    @Field(type => Boolean, {defaultValue: false})
    receiveEmails: boolean
}