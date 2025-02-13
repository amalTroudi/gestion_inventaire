// import { AddUserParams, UserEntity } from "../entities/user";

import { Pool } from "pg";
import { AddUserParams, UserEntity } from "../user";

export const UPDATE_USER_REPOSITORY = "UPDATE_USER_REPOSITORY";

export interface IUpdateUserRepository {
    // Méthode pour mettre à jour un utilisateur
    updateUserRepository: (id: string | number, data: Partial<AddUserParams>) => Promise<UserEntity>;
}
export class UpdateUserRepositoryImpl implements IUpdateUserRepository {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'inventaire',
            password: 'admin_admin',
            port: 5432, // ou un autre port si nécessaire
        });
    }

    // Implémentation de la méthode pour mettre à jour un utilisateur
    async updateUserRepository(id: string | number, data: Partial<AddUserParams>): Promise<UserEntity> {
        const { name, email, password } = data;

        const result = await this.pool.query(
            `UPDATE "user" SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING id, name, email, password`,
            [name, email, password, id]
        );

        if (result.rowCount === 0) {
            throw new Error(`User with id ${id} not found`);
        }

        return result.rows[0];
    }
}