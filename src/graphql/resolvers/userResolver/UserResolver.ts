import { Inject } from "@nestjs/common";
import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { mockUsers } from "src/_mock_/mockUsers";
import { mockUserSettings } from "src/_mock_/mockUserSettings";
import { User } from "src/graphql/models/User";
import { UserSetting } from "src/graphql/models/UserSetting";
import { CreateUserData } from "src/graphql/utils/CreateUserInput";
import { UserService } from "src/users/service/UserService";
import { UserSettingService } from "src/users/service/UserSettingService";

@Resolver(of => User)
export class UserResolver {
    constructor(
           @Inject(UserService) 
           private readonly userService: UserService,
           @Inject(UserSettingService)
           private readonly userSettingService: UserSettingService) {}

    @Query(returns => User, {nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number) {
        return mockUsers.find(user => user.id === id)
    }

    @Query(() => [User])
    getUsers() {
        return this.userService.getUsers()
    }

    @ResolveField(returns => UserSetting, {nullable: true, name: 'settings'})
    getUserSettingsById(@Parent() user: User) {
      return this.userSettingService.getUserSettingsById(user.id)

    }   

    @Mutation(returns => User)
    createUser(@Args('createUserData') createUserData: CreateUserData) {
       return  this.userService.createUser(createUserData)
    }
}