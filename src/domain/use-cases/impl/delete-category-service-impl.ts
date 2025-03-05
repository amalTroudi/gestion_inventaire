import { DELETE_CATEGORY_REPOSITORY, IDeleteCategoryRepository } from "@/domain/entities/contracts/delete-category_repository";
import { Adapter, Service } from "@tsclean/core";
import { IDeleteCategoryService } from "../delete-category-service";

@Service()
export class DeleteCategoryServiceImpl implements IDeleteCategoryService {
    constructor(
        @Adapter(DELETE_CATEGORY_REPOSITORY) private readonly deleteCategoryRepository: IDeleteCategoryRepository
    ) {}

    async deleteCategoryService(id: string | number): Promise<void> {
        await this.deleteCategoryRepository.deleteCategoryRepository(id);
    }
}
