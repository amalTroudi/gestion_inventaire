import { DELETE_CATEGORY_SERVICE, IDeleteCategoryService } from "@/domain/use-cases/delete-category-service";
import { Adapter, Delete, Mapping, Param } from "@tsclean/core";

@Mapping('api/v1/delete-Category')
export class DeleteCategoryController {
    constructor(
        @Adapter(DELETE_CATEGORY_SERVICE) private readonly deleteCategoryService: IDeleteCategoryService
    ) {}

    @Delete('/:id')
    async deleteCategoryController(@Param('id') id: string): Promise<void> {
        if (!id) {
            throw new Error("ID is required");
        }
        await this.deleteCategoryService.deleteCategoryService(id);
    }
    
}
