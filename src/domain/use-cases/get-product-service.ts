import { ProductModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/products-pg";

export const GET_PRODUCTS_SERVICE = "GET_PRODUCTS_SERVICE";

export interface IGetProductsService {
    getProductsService: () => Promise<ProductModelPg[]>
}