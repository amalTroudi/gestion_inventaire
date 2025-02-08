import {Adapter, Service} from "@tsclean/core";
import {UserEntity} from "@/domain/entities/user";
import {AddUserParams} from "@/domain/entities/user";
import {IAddUserService} from "@/domain/use-cases/add-user-service";
import { ADD_USER_REPOSITORY, IAddUserRepository } from "@/domain/entities/contracts/add-user-repository";

@Service()
export class AddUserServiceImpl implements IAddUserService {
    constructor(
        @Adapter(ADD_USER_REPOSITORY) private readonly addUserRepository: IAddUserRepository
    ) {
    }

    async addUserService(data: AddUserParams): Promise<UserEntity> {
        return await this.addUserRepository.addUserRepository(data);
    }
}