export const DELETE_CATEGORY_REPOSITORY = "DELETE_CATEGORY_REPOSITORY";

export interface IDeleteCategoryRepository {
    deleteCategoryRepository: (id: string | number) => Promise<void>;
}
