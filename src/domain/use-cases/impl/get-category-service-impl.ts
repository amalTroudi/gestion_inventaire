import { GET_Category_REPOSITORY, IGetCategoryRepository } from "@/domain/entities/contracts/get-category-repository";
import { CategoryModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/category-pg";
import { Adapter, Service } from "@tsclean/core";
import { IGetCategoryService } from "../get-category-service";

@Service()
export class GetCategoryServiceImpl implements IGetCategoryService {
    constructor(
        @Adapter(GET_Category_REPOSITORY) private readonly getCategoryRepository: IGetCategoryRepository
    ) {
    }

    async getCategoryService(): Promise<CategoryModelPg[]> {
        return await this.getCategoryRepository.getCategoryRepository();
    }
}