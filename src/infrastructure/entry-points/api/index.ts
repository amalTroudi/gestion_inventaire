import { AddCategoryController } from "./add-category-controller";
import { AddProductController } from "./add-product-controller";
import { AddUserController } from "./add-user-controller";
import { AuthenticationController } from "./authentification-controller";
import { DeleteCategoryController } from "./delete-category-controller";
import { DeleteProductController } from "./delete-product-controller";
import { DeleteUserController } from "./delete-user-controller";
import { GetCategoryController } from "./get-category-controller";
import { GetProductsController } from "./get-product-controller";
import { GetUsersController } from "./get-user-controller";
import { UpdateCategoryController } from "./update-category-controler";
import { UpdateProductController } from "./update-product-controller";
import { UpdateUserController } from "./update-user-controller";

export const controllers = [
    AddUserController,
    GetUsersController, 
    DeleteUserController , 
    UpdateUserController , 
    AuthenticationController , 
    AddProductController , 
    GetProductsController , 
    DeleteProductController , 
    UpdateProductController , 
    AddCategoryController , 
    DeleteCategoryController, 
    UpdateCategoryController, 
    GetCategoryController
];