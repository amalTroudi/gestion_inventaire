import { AddUserParams, UserEntity } from "../entities/user"

export const UPDATE_USER_SERVICE = "UPDATE_USER_SERVICE"

export interface IUpdateUserService {
    updateUserService: (id: string | number, data: Partial<AddUserParams>) => Promise<UserEntity>;

}