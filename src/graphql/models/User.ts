import { Field, ObjectType, Int} from "@nestjs/graphql";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm'
import { UserSetting } from "./UserSetting";

@Entity({name: 'users'})
@ObjectType()
export class User {
  
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    username: string;

    @Column()
    @Field({nullable: true})
    displayName?: string;

    @OneToOne(() => UserSetting)
    @JoinColumn()
    @Field(type => UserSetting)
    settings?: UserSetting
}