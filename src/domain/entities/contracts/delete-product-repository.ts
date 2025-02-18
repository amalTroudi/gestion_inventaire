export const DELETE_PRODUCT_REPOSITORY = "DELETE_PRODUCT_REPOSITORY";

export interface IDeleteProductRepository {
    deleteProductRepository: (id: string | number) => Promise<void>;
}
