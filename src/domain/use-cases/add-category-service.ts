import { AddCategoryParams, CategoryEntity } from "../entities/category"

export const ADD_CATEGORY_SERVICE = "ADD_CATEGORY_SERVICE"

export interface IAddCategoryService {
  addCategoryService: (data: AddCategoryParams) => Promise<CategoryEntity>
}
