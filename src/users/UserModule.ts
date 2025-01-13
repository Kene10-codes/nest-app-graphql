import { Module } from "@nestjs/common";
import { UserService } from "./service/UserService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User";
import { UserResolver } from "src/graphql/resolvers/userResolver/UserResolver";
import { UserSettingsRevolver } from "src/graphql/resolvers/userResolver/UserSettingsRevolver";
import { UserSetting } from "src/graphql/models/UserSetting";
import { UserSettingService } from "./service/UserSettingService";

@Module({
    imports: [TypeOrmModule.forFeature([User, UserSetting])],
    providers: [UserService, UserSettingService, UserResolver, UserSettingsRevolver]
})

export class UserModule {}