// import { AddUserParams, UserEntity } from "../entities/user";

import { Pool } from "pg";
import { AddProductParams, ProductEntity } from "../product";
import { AddUserParams, UserEntity } from "../user";

export const UPDATE_PRODUCT_REPOSITORY = "UPDATE_PRODUCT_REPOSITORY";

export interface IUpdateProductRepository {
    // Méthode pour mettre à jour un utilisateur
    updateProductRepository: (id: string | number, data: Partial<AddProductParams>) => Promise<ProductEntity>;
}
export class UpdateProductRepositoryImpl implements IUpdateProductRepository {
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
    async updateProductRepository(id: string | number, data: Partial<AddProductParams>): Promise<ProductEntity> {
        const { name, price, description } = data;

        const result = await this.pool.query(
            `UPDATE "user" SET name = $1, price = $2, description = $3 WHERE id = $4 RETURNING id, name, price, description`,
            [name, price, description, id]
        );

        if (result.rowCount === 0) {
            throw new Error(`User with id ${id} not found`);
        }

        return result.rows[0];
    }
}