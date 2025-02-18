import { IAddUserRepository } from "@/domain/entities/contracts/add-user-repository";
import { IDeleteUserRepository } from "@/domain/entities/contracts/delete-user-repository";
import { IUpdateAccessTokenRepository } from "@/domain/entities/contracts/update-access-token-repository";
import { AddUserParams, UserEntity } from "@/domain/entities/user";
import { UserModelPg } from "./models/user-pg";
import bcrypt from 'bcrypt';
import { IGetUsersRepository } from "@/domain/entities/contracts/get-user-repository";
import { ICheckEmailRepository } from "@/domain/entities/contracts/check_email_repository";
import { ILoadAccountTokenRepository } from "@/domain/entities/contracts/load-account-repository";
import { ProductModelPg } from "./models/products-pg";
import { AddProductParams, ProductEntity } from "@/domain/entities/product";
import { IAddProductRepository } from "@/domain/entities/contracts/add-product-repository";
import { IGetProductsRepository } from "@/domain/entities/contracts/get-product-repository";
import { IDeleteProductRepository } from "@/domain/entities/contracts/delete-product-repository";
import { IUpdateProductRepository } from "@/domain/entities/contracts/update-product-repository";


export class ProductPgRepositoryAdapter implements 
    IAddProductRepository,
    IGetProductsRepository,
    IDeleteProductRepository,
    IUpdateProductRepository {

    // Méthode de mapping pour formater les données avant de les retourner
    map(data: any): any {
        const { id, name, price, description } = data;
        return Object.assign({}, { id: id.toString(), name , price, description});
    }

    // Implémentation de la méthode pour obtenir tous les produits
    async getProductsRepository(): Promise<ProductModelPg[]> {
        return await ProductModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
// add new product 
      async addProduct(data: AddProductParams): Promise<ProductEntity> {
       return await ProductModelPg.create(data);
    }
    async deleteProductRepository(id: string | number): Promise<void> {
        const product = await ProductModelPg.findByPk(id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        await product.destroy();
    }
     //  mise à jour d'un utilisateur
     async updateProductRepository(id: string | number, data: Partial<AddProductParams>): Promise<ProductEntity> {
        const product = await ProductModelPg.findByPk(id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        await product.update(data);
        return this.map(product); 
    }
    }

