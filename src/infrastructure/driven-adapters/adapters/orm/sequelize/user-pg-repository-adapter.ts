import {AddUserParams, UserEntity} from "@/domain/entities/user";
import {UserModelPg}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";

export class UserPgRepositoryAdapter {
    async addUserRepository(data: AddUserParams): Promise<UserEntity> {
        return await UserModelPg.create(data);
    }
}
