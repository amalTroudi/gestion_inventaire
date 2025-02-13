import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";

export const CHECK_EMAIL_REPOSITORY = "CHECK_EMAIL_REPOSITORY";

export interface ICheckEmailRepository {
    checkEmail: (email: string) => Promise<ICheckEmailRepository.Result>
}

export namespace ICheckEmailRepository {
    export type Result = {
        id: string | number;
        name: string;
        password: string;
        roles: [];
    }
     export type Exist = boolean;
}
export class CkeckEmailRepositoryImpl implements ICheckEmailRepository{
    map(data: any): any {
        const { id, name, email, password, role } = data;
        return Object.assign({}, { id: id.toString(), name , email, password, role });
    }
    async checkEmail(email: string): Promise<ICheckEmailRepository.Result> {
        const user = await UserModelPg.findOne({
            where: { email }
        });
        return user ? this.map(user) : null; // Cela devrait retourner null si l'utilisateur n'existe pas
    }
}