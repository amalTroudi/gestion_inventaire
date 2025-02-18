import { GET_PRODUCTS_SERVICE } from "@/domain/use-cases/get-product-service";
import {  IGetProductsService } from "@/domain/use-cases/get-product-service";
import { Adapter, Get, Mapping } from "@tsclean/core";


@Mapping('/get-Products')
export class GetProductsController {

    constructor(
        @Adapter(GET_PRODUCTS_SERVICE) private readonly getProductsService: IGetProductsService
    ) {
    }

    @Get()
    // @Auth(["admin", "guest"])
    async getProductsController(): Promise<any> {
        return await this.getProductsService.getProductsService();
    }
   
}