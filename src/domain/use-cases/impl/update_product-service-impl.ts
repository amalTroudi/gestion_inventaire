import { UPDATE_PRODUCT_REPOSITORY } from "@/domain/entities/contracts/update-product-repository";
import { IUpdateProductRepository } from "@/domain/entities/contracts/update-product-repository";
import { AddProductParams, ProductEntity } from "@/domain/entities/product";
import { Adapter, Service } from "@tsclean/core";
import { IUpdateProductService } from "../update-product-service";

@Service()
export class UpdateProductServiceImpl implements IUpdateProductService {
    constructor(
        @Adapter(UPDATE_PRODUCT_REPOSITORY) private readonly updateProductRepository: IUpdateProductRepository
    ) {}

    // Ajout de la méthode de mise à jour dans le service
    async updateProductService(id: string | number, data: Partial<AddProductParams>): Promise<ProductEntity> {
        return await this.updateProductRepository.updateProductRepository(id, data);
    }

}
