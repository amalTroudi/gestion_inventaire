import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";

export const GET_USERS_REPOSITORY = "GET_USERS_REPOSITORY";

export interface IGetUsersRepository {
    getUsersRepository: () => Promise<UserModelPg[]>
}
export class GetUsersRepositoryImpl implements IGetUsersRepository {
    async getUsersRepository(): Promise<UserModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await UserModelPg.findAll();
    }
}