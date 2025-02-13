import { IUpdateUserRepository, UPDATE_USER_REPOSITORY } from "@/domain/entities/contracts/update-user-repository";
import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { Adapter, Service } from "@tsclean/core";
import { IUpdateUserService } from "../update-user-service";

@Service()
export class UpdateUserServiceImpl implements IUpdateUserService {
    constructor(
        @Adapter(UPDATE_USER_REPOSITORY) private readonly updateUserRepository: IUpdateUserRepository
    ) {}

    // Ajout de la méthode de mise à jour dans le service
    async updateUserService(id: string | number, data: Partial<AddUserParams>): Promise<UserEntity> {
        return await this.updateUserRepository.updateUserRepository(id, data);
    }

}
