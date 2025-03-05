import { Pool } from "pg";
import { AddCategoryParams, CategoryEntity } from "../category";

export const ADD_CATEGORY_REPOSITORY = "ADD_CATEGORY_REPOSITORY";

export interface IAddCategorytRepository {
    addCategory: (data: AddCategoryParams) => Promise<CategoryEntity>;
}

export class AddCategoryRepositoryImpl implements IAddCategorytRepository {
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

    async addCategory(data: AddCategoryParams): Promise<CategoryEntity> {
        const { name } = data;
        const result = await this.pool.query(
            `INSERT INTO "Category" (name) VALUES ($1) RETURNING id, name`,
            [name]
        );
        return result.rows[0];
    }
}
