export const DELETE_CATEGORY_SERVICE = "DELETE_CATEGORY_SERVICE";

export interface IDeleteCategoryService {
    deleteCategoryService: (id: string | number) => Promise<void>;
}
