import { DELETE_PRODUCT_SERVICE, IDeleteProductService } from "@/domain/use-cases/delete-product-service";
import { Adapter, Delete, Mapping, Param } from "@tsclean/core";

@Mapping('api/v1/delete-product')
export class DeleteProductController {
    constructor(
        @Adapter(DELETE_PRODUCT_SERVICE) private readonly deleteProductService: IDeleteProductService
    ) {}

    @Delete('/:id')
    async deleteProductController(@Param('id') id: string): Promise<void> {
        if (!id) {
            throw new Error("ID is required");
        }
        await this.deleteProductService.deleteProductService(id);
    }
    
}
