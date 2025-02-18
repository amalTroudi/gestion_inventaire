import { DELETE_PRODUCT_REPOSITORY, IDeleteProductRepository } from "@/domain/entities/contracts/delete-product-repository";
import { Adapter, Service } from "@tsclean/core";
import { IDeleteProductService } from "../delete-product-service";

@Service()
export class DeleteProductServiceImpl implements IDeleteProductService {
    constructor(
        @Adapter(DELETE_PRODUCT_REPOSITORY) private readonly deleteProductRepository: IDeleteProductRepository
    ) {}

    async deleteProductService(id: string | number): Promise<void> {
        await this.deleteProductRepository.deleteProductRepository(id);
    }
}
