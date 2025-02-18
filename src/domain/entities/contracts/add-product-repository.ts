import { Pool } from "pg";
import { AddProductParams, ProductEntity } from "../product";

export const ADD_PRODUCT_REPOSITORY = "ADD_PRODUCT_REPOSITORY";

export interface IAddProductRepository {
    addProduct: (data: AddProductParams) => Promise<ProductEntity>;
}

export class AddProductRepositoryImpl implements IAddProductRepository {
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

    async addProduct(data: AddProductParams): Promise<ProductEntity> {
        const { name, price, description } = data;
        const result = await this.pool.query(
            `INSERT INTO "product" (name, price, description) VALUES ($1, $2, $3) RETURNING id, name, price, description`,
            [name, price, description]
        );
        return result.rows[0];
    }
}
