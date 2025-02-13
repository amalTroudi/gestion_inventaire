export const DELETE_USER_REPOSITORY = "DELETE_USER_REPOSITORY";

export interface IDeleteUserRepository {
    deleteUserRepository: (id: string | number) => Promise<void>;
}
