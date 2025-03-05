// import { AddUserParams, UserEntity } from "../entities/user";

import { Pool } from "pg";
import { AddCategoryParams, CategoryEntity } from "../category";

export const UPDATE_CATEGORY_REPOSITORY = "UPDATE_CATEGORY_REPOSITORY";

export interface IUpdateCategoryRepository {
    // Méthode pour mettre à jour un utilisateur
    updateCategoryRepository: (id: string | number, data: Partial<AddCategoryParams>) => Promise<CategoryEntity>;
}
export class UpdateCategoryRepositoryImpl implements IUpdateCategoryRepository {
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
    async updateCategoryRepository(id: string | number, data: Partial<AddCategoryParams>): Promise<CategoryEntity> {
        const { name} = data;

        const result = await this.pool.query(
            `UPDATE "user" SET name = $1 WHERE id = $4 RETURNING id, name`,
            [name, id]
        );

        if (result.rowCount === 0) {
            throw new Error(`User with id ${id} not found`);
        }

        return result.rows[0];
    }
}