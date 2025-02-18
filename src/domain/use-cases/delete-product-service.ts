export const DELETE_PRODUCT_SERVICE = "DELETE_PRODUCT_SERVICE";

export interface IDeleteProductService {
    deleteProductService: (id: string | number) => Promise<void>;
}
