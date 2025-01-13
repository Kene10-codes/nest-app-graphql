import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User";
import { CreateUserData } from "src/graphql/utils/CreateUserInput";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    getUsers() {
        return this.userRepository.find({relations: ['settings']})
    }

    createUser(createUserData: CreateUserData) {
       const newUser = this.userRepository.create(createUserData)
       return this.userRepository.save(newUser)
    }
}