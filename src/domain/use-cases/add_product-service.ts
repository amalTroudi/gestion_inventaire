import {ProductEntity, AddProductParams} from "@/domain/entities/product";

export const ADD_PRODUCT_SERVICE = "ADD_PRODUCT_SERVICE"

export interface IAddProductService {
  addProductService: (data: AddProductParams) => Promise<ProductEntity>
}
