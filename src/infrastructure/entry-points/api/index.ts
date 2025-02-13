import { AddUserController } from "./add-user-controller";
import { AuthenticationController } from "./authentification-controller";
import { DeleteUserController } from "./delete-user-controller";
import { GetUsersController } from "./get-user-controller";
import { UpdateUserController } from "./update-user-controller";

export const controllers = [
    AddUserController,
    GetUsersController, 
    DeleteUserController , 
    UpdateUserController , 
    AuthenticationController
];