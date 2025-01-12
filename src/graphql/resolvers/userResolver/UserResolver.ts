import { Resolver, Query, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { mockUsers } from "src/_mock_/mockUsers";
import { mockUserSettings } from "src/_mock_/mockUserSettings";
import { User } from "src/graphql/models/User";
import { UserSetting } from "src/graphql/models/UserSetting";

@Resolver(of => User)
export class UserResolver {
    @Query(returns => User)
    getUser() {
        return {
            id: 1,
            username: 'Kene',
            displayName: "Kene10"
        }
    }

    @Query(returns => User, {nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number) {
        return mockUsers.find(user => user.id === id)
    }

    @Query(() => [User])
    getUsers() {
        return mockUsers
    }

    @ResolveField(returns => UserSetting, {nullable: true, name: 'settings'})
    getUserSettings(@Parent() user: User) {
      return mockUserSettings.find(setting => setting.userId === user.id)

    }   
}