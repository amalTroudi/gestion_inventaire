import { ProductModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/products-pg";

export const GET_PRODUCTS_REPOSITORY = "GET_PRODUCTS_REPOSITORY";

export interface IGetProductsRepository {
    getProductsRepository: () => Promise<ProductModelPg[]>
}
export class GetProductsRepositoryImpl implements IGetProductsRepository {
    async getProductsRepository(): Promise<ProductModelPg[]> {
        // Utilisation d'une requête Sequelize pour récupérer tous les utilisateurs
        return await ProductModelPg.findAll();
    }
}