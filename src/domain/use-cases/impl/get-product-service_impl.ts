import { GET_PRODUCTS_REPOSITORY, IGetProductsRepository } from "@/domain/entities/contracts/get-product-repository";
import { ProductModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/products-pg";
import { Adapter, Service } from "@tsclean/core";
import { IGetProductsService } from "../get-product-service";

@Service()
export class GetProductsServiceImpl implements IGetProductsService {
    constructor(
        @Adapter(GET_PRODUCTS_REPOSITORY) private readonly getProductsRepository: IGetProductsRepository
    ) {
    }

    async getProductsService(): Promise<ProductModelPg[]> {
        return await this.getProductsRepository.getProductsRepository();
    }
}