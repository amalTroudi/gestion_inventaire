import { AddCategoryParams, CategoryEntity } from "@/domain/entities/category";
import { ADD_CATEGORY_SERVICE, IAddCategoryService } from "@/domain/use-cases/add-category-service";
import {Mapping, Post, Adapter, Body} from "@tsclean/core";

@Mapping('api/v1/add-Category')
export class AddCategoryController {

    constructor(
        @Adapter(ADD_CATEGORY_SERVICE) private readonly addCategoryService: IAddCategoryService
   ) {
   }

   @Post()
   async addCategoryController(@Body() data: AddCategoryParams): Promise<CategoryEntity> {
       return await this.addCategoryService.addCategoryService(data);
   }
}
