export const DELETE_USER_SERVICE = "DELETE_USER_SERVICE";

export interface IDeleteUserService {
    deleteUserService: (id: string | number) => Promise<void>;
}
