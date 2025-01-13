import { Args, Mutation, ObjectType, Resolver } from "@nestjs/graphql";
import { mockUserSettings } from "src/_mock_/mockUserSettings";
import { UserSetting } from "../../models/UserSetting";
import { CreateUserSettingsData } from "../../utils/CreateUserSettings";
import { Inject, Query } from "@nestjs/common";
import { UserSettingService } from "src/users/service/UserSettingService";

@Resolver(of => UserSetting)
export class UserSettingsRevolver {
    constructor(@Inject(UserSettingService) private readonly userSettingService: UserSettingService) {}

    @Mutation(returns  => UserSetting)
    createUserSettings(@Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsData){
       return this.userSettingService.createUserSettings(createUserSettingsData)
    }
}