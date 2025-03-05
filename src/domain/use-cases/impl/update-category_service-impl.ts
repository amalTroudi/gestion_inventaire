import { Adapter, Service } from "@tsclean/core";
import { IUpdateCategoryRepository, UPDATE_CATEGORY_REPOSITORY } from "@/domain/entities/contracts/update-category-repository";
import { IUpdateCategoryService } from "../update-category-service";
import { AddCategoryParams, CategoryEntity } from "@/domain/entities/category";

@Service()
export class UpdateCategoryServiceImpl implements IUpdateCategoryService {
    constructor(
        @Adapter(UPDATE_CATEGORY_REPOSITORY) private readonly updateCategoryRepository: IUpdateCategoryRepository
    ) {}

    // Ajout de la méthode de mise à jour dans le service
    async updateCategoryService(id: string | number, data: Partial<AddCategoryParams>): Promise<CategoryEntity> {
        return await this.updateCategoryRepository.updateCategoryRepository(id, data);
    }

}
