import { Module } from "@nestjs/common";
import { UserService } from "./service/UserService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User";
import { UserResolver } from "src/graphql/resolvers/userResolver/UserResolver";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, UserResolver]
})

export class UserModule {}