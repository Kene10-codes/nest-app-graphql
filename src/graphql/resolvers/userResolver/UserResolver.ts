import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { mockUsers } from "src/_mock_/mockUsers";
import { User } from "src/graphql/models/User";

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

    @Query(returns => [User])
    getUsers() {
        return mockUsers
    }
}