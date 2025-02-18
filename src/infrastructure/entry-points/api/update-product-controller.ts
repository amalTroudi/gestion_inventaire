import { AddProductParams, ProductEntity } from "@/domain/entities/product";
import { IUpdateProductService, UPDATE_PRODUCT_SERVICE } from "@/domain/use-cases/update-product-service";
import { Adapter, Body, Mapping, Param, Post, Put } from "@tsclean/core";

@Mapping('api/v1/update-Product')
export class UpdateProductController {

    constructor(
        @Adapter(UPDATE_PRODUCT_SERVICE) private readonly updateProductService: IUpdateProductService
    ) {}

 

    //  mise à jour dans le contrôleur
    
    @Put(':id')
    async updateProductController(
        @Param('id') id: string,  // ID récupéré de l'URL
        @Body() data: Partial<AddProductParams>
    ): Promise<ProductEntity> {
        console.log('ID reçu dans le contrôleur:', id); // Log pour vérifier l'ID
        return await this.updateProductService.updateProductService(id, data);
    }

}
