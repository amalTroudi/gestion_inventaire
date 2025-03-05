import { AddCategoryParams, CategoryEntity } from "@/domain/entities/category";
import { ADD_CATEGORY_REPOSITORY, IAddCategorytRepository } from "@/domain/entities/contracts/add_category_repository";
import { Adapter, Inject, Service } from "@tsclean/core";
import { IAddCategoryService } from "../add-category-service";

@Service()
export class AddCategoryServiceImpl implements IAddCategoryService{
    constructor(
        @Inject(ADD_CATEGORY_REPOSITORY)  private readonly addCategoryRepository: IAddCategorytRepository
    ) {
    }

    async addCategoryService(data: AddCategoryParams): Promise<CategoryEntity> {
        return await this.addCategoryRepository.addCategory(data);
    }
}