import { AddProductParams, ProductEntity } from "@/domain/entities/product";
import { ADD_PRODUCT_SERVICE, IAddProductService } from "@/domain/use-cases/add_product-service";
import {Mapping, Get, Post, Adapter, Body} from "@tsclean/core";

@Mapping('api/v1/add-Product')
export class AddProductController {

    constructor(
        @Adapter(ADD_PRODUCT_SERVICE) private readonly addProductService: IAddProductService
   ) {
   }

   @Post()
   async addProductController(@Body() data: AddProductParams): Promise<ProductEntity> {
       return await this.addProductService.addProductService(data);
   }
}
