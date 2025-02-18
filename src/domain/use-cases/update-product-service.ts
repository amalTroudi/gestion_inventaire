import { AddProductParams, ProductEntity } from "../entities/product"

export const UPDATE_PRODUCT_SERVICE = "UPDATE_PRODUCT_SERVICE"

export interface IUpdateProductService {
    updateProductService: (id: string | number, data: Partial<AddProductParams>) => Promise<ProductEntity>;

}