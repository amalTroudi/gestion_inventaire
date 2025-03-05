import { CategoryModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/category-pg";

export const GET_Category_REPOSITORY = "GET_Category_REPOSITORY";

export interface IGetCategoryRepository {
    getCategoryRepository: () => Promise<CategoryModelPg[]>
}
export class GetCategorysRepositoryImpl implements IGetCategoryRepository {
    async getCategoryRepository(): Promise<CategoryModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await CategoryModelPg.findAll();
    }
}