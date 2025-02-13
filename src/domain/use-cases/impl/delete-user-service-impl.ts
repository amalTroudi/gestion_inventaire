import { DELETE_USER_REPOSITORY, IDeleteUserRepository } from "@/domain/entities/contracts/delete-user-repository";
import { Adapter, Service } from "@tsclean/core";
import { IDeleteUserService } from "../delete-user-service";

@Service()
export class DeleteUserServiceImpl implements IDeleteUserService {
    constructor(
        @Adapter(DELETE_USER_REPOSITORY) private readonly deleteUserRepository: IDeleteUserRepository
    ) {}

    async deleteUserService(id: string | number): Promise<void> {
        await this.deleteUserRepository.deleteUserRepository(id);
    }
}
