import { Args, Mutation, ObjectType, Resolver } from "@nestjs/graphql";
import { mockUserSettings } from "src/_mock_/mockUserSettings";
import { UserSetting } from "../../models/UserSetting";
import { CreateUserSettingsData } from "../../utils/CreateUserSettings";

@Resolver(of => UserSetting)
export class UserSettingsRevolver {
    @Mutation(returns  => UserSetting)
    createrUserSettings(@Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsData) {
        const newUserSetting = {
            userId: createUserSettingsData.userId,
            receiveNotifications: createUserSettingsData.receiveNotifications,
            receiveEmails: createUserSettingsData.receiveEmails
        };
        mockUserSettings.push(newUserSetting);
        return newUserSetting;
    }

}