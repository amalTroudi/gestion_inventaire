import { ADD_PRODUCT_REPOSITORY, IAddProductRepository } from "@/domain/entities/contracts/add-product-repository";
import { AddProductParams, ProductEntity } from "@/domain/entities/product";
import { Adapter, Inject, Service } from "@tsclean/core";
import { IAddProductService } from "../add_product-service";

@Service()
export class AddProductServiceImpl implements IAddProductService {
    constructor(
        @Inject(ADD_PRODUCT_REPOSITORY)  private readonly addProductRepository: IAddProductRepository
    ) {
    }

    async addProductService(data: AddProductParams): Promise<ProductEntity> {
        return await this.addProductRepository.addProduct(data);
    }
}