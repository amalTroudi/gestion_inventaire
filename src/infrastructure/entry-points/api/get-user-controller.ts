import { GET_USERS_SERVICE, IGetUsersService } from "@/domain/use-cases/get-user-service";
import { Adapter, Get, Mapping } from "@tsclean/core";


@Mapping('/get-users')
export class GetUsersController {

    constructor(
        @Adapter(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService
    ) {
    }

    @Get()
    // @Auth(["admin", "guest"])
    async getUsersController(): Promise<any> {
        return await this.getUsersService.getUsersService();
    }
   
}