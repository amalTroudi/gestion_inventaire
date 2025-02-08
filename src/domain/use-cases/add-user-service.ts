import {UserEntity, AddUserParams} from "@/domain/entities/user";

export const ADD_USER_SERVICE = "ADD_USER_SERVICE"

export interface IAddUserService {
  addUserService: (data: AddUserParams) => Promise<UserEntity>
}
