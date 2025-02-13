import { ICheckEmailRepository } from "@/domain/entities/contracts/check_email_repository";
import {AddUserParams, UserEntity} from "@/domain/entities/user";
import {UserModelPg}from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";

export class UserPgRepositoryAdapter {
     // Méthode de mapping pour formater les données avant de les retourner
     map(data: any): any {
        const { id, name, email, password, role } = data;
        return Object.assign({}, { id: id.toString(), name , email, password, role });
    }

 
    // Implémentation de la méthode pour vérifier si un email existe
    async checkEmail(email: string): Promise<ICheckEmailRepository.Result> {
    const user = await UserModelPg.findOne({
        where: { email }
    });
    return user ? this.map(user) : null;
}
   
     // Implémentation de la mise à jour du token d'accès (access token)
     async updateToken(id: string | number, token: string): Promise<void> {
        await UserModelPg.update(
            { access_token: token }, // Ce que vous voulez mettre à jour
            { where: { id } } // Condition de mise à jour, ici l'id
        );
    }
    // create a new user 
    async addUserRepository(data: AddUserParams): Promise<UserEntity> {
        return await UserModelPg.create(data);
     }
     // get users 
     async getUsersRepository(): Promise<UserModelPg[]> {
        return await UserModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
    //delete user 
    async deleteUserRepository(id: string | number): Promise<void> {
        const user = await UserModelPg.findByPk(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        await user.destroy();
    }
     //  mise à jour d'un utilisateur
     async updateUserRepository(id: string | number, data: Partial<AddUserParams>): Promise<UserEntity> {
        const user = await UserModelPg.findByPk(id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        await user.update(data);
        return this.map(user); 
    }
}
