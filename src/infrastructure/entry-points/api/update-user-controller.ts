import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { IUpdateUserService, UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import { Adapter, Body, Mapping, Param, Post, Put } from "@tsclean/core";

@Mapping('api/v1/update-user')
export class UpdateUserController {

    constructor(
        @Adapter(UPDATE_USER_SERVICE) private readonly updateUserService: IUpdateUserService
    ) {}

 

    //  mise à jour dans le contrôleur
    
    @Put(':id')
    async updateUserController(
        @Param('id') id: string,  // ID récupéré de l'URL
        @Body() data: Partial<AddUserParams>
    ): Promise<UserEntity> {
        console.log('ID reçu dans le contrôleur:', id); // Log pour vérifier l'ID
        return await this.updateUserService.updateUserService(id, data);
    }

}
