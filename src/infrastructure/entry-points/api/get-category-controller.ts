import { GET_CATEGORY_SERVICE, IGetCategoryService } from "@/domain/use-cases/get-category-service";
import { Adapter, Get, Mapping } from "@tsclean/core";


@Mapping('/get-Category')
export class GetCategoryController {

    constructor(
        @Adapter(GET_CATEGORY_SERVICE) private readonly getCategoryService: IGetCategoryService
    ) {
    }

    @Get()
    // @Auth(["admin", "guest"])
    async getCategoryController(): Promise<any> {
        return await this.getCategoryService.getCategoryService();
    }
   
}