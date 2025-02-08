
import {UserEntity, AddUserParams} from "@/domain/entities/user";

export const ADD_USER_REPOSITORY = "ADD_USER_REPOSITORY"

export interface IAddUserRepository {
    addUserRepository: (data: AddUserParams) => Promise<UserEntity>;
}
