import { AddCategoryParams, CategoryEntity } from "@/domain/entities/category";
import { IUpdateCategoryService, UPDATE_CATEGORY_SERVICE } from "@/domain/use-cases/update-category-service";
import { Adapter, Body, Mapping, Param, Post, Put } from "@tsclean/core";

@Mapping('api/v1/update-Category')
export class UpdateCategoryController {

    constructor(
        @Adapter(UPDATE_CATEGORY_SERVICE) private readonly updateCategoryService: IUpdateCategoryService
    ) {}

 

    //  mise à jour dans le contrôleur
    
    @Put(':id')
    async updateCategoryController(
        @Param('id') id: string,  // ID récupéré de l'URL
        @Body() data: Partial<AddCategoryParams>
    ): Promise<CategoryEntity> {
        console.log('ID reçu dans le contrôleur:', id); // Log pour vérifier l'ID
        return await this.updateCategoryService.updateCategoryService(id, data);
    }

}
