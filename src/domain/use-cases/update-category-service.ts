import { AddCategoryParams, CategoryEntity } from "../entities/category";

export const UPDATE_CATEGORY_SERVICE = "UPDATE_CATEGORY_SERVICE"

export interface IUpdateCategoryService {
    updateCategoryService: (id: string | number, data: Partial<AddCategoryParams>) => Promise<CategoryEntity>;

}