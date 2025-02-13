import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";

export const GET_USERS_SERVICE = "GET_USERS_SERVICE";

export interface IGetUsersService {
    getUsersService: () => Promise<UserModelPg[]>
}