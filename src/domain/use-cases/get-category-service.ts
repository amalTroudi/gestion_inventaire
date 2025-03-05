import { CategoryModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/category-pg";

export const GET_CATEGORY_SERVICE = "GET_CATEGORY_SERVICE";

export interface IGetCategoryService {
    getCategoryService: () => Promise<CategoryModelPg[]>
}