import { DELETE_USER_SERVICE, IDeleteUserService } from "@/domain/use-cases/delete-user-service";
import { Adapter, Delete, Mapping, Param } from "@tsclean/core";

@Mapping('api/v1/delete-user')
export class DeleteUserController {
    constructor(
        @Adapter(DELETE_USER_SERVICE) private readonly deleteUserService: IDeleteUserService
    ) {}

    @Delete('/:id')
    async deleteUserController(@Param('id') id: string): Promise<void> {
        if (!id) {
            throw new Error("ID is required");
        }
        await this.deleteUserService.deleteUserService(id);
    }
    
}
