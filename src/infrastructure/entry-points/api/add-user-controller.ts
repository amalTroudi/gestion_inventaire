import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { ADD_USER_SERVICE, IAddUserService } from "@/domain/use-cases/add-user-service";
import {Mapping, Get, Post, Adapter, Body} from "@tsclean/core";

@Mapping('api/v1/add-user')
export class AddUserController {

    constructor(
        @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService
   ) {
   }

   @Post()
   async addUserController(@Body() data: AddUserParams): Promise<UserEntity> {
       return await this.addUserService.addUserService(data);
   }
}
