import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/graphql/models/User";
import { UserSetting } from "src/graphql/models/UserSetting";
import { CreateUserSettingsData } from "src/graphql/utils/CreateUserSettings";
import { Repository } from "typeorm";

@Injectable()
export class UserSettingService {
    constructor(
        @InjectRepository(UserSetting) 
        private readonly userSettingsRepository: Repository<UserSetting>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) {}

    getUserSettingsById(userId: number) {
        return this.userSettingsRepository.findOneBy({userId})
    }

   async createUserSettings(createUserSettingData: CreateUserSettingsData) {
         const findUser = await this.userRepository.findOneBy({id: createUserSettingData.userId})

         if(!findUser) throw new HttpException('User not found', 404)
          const newUserSetting = this.userSettingsRepository.create(createUserSettingData)
          const savedSettings =  await this.userSettingsRepository.save(newUserSetting);
          
          findUser.settings = savedSettings
          await this.userRepository.save(findUser)

         return savedSettings
    }
}