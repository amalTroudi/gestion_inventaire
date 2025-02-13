import { Pool } from "pg";
import { AddUserParams, UserEntity } from "../user";


export const ADD_USER_REPOSITORY = "ADD_USER_REPOSITORY"

export interface IAddUserRepository {
    addUserRepository: (data: AddUserParams) => Promise<UserEntity>;
}
export class AddUserRepositoryImpl implements IAddUserRepository {
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

    async addUserRepository(data: AddUserParams): Promise<UserEntity> {
        const {  email, password , name} = data;
        const result = await this.pool.query(
            `INSERT INTO "user" (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, password`,
            [ email, password ,name ]
        );
        return result.rows[0];
    }
}