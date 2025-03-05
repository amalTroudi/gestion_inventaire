import { AddCategoryParams, CategoryEntity } from "@/domain/entities/category";
import { IAddCategorytRepository } from "@/domain/entities/contracts/add_category_repository";
import { IDeleteCategoryRepository } from "@/domain/entities/contracts/delete-category_repository";
import { IGetCategoryRepository } from "@/domain/entities/contracts/get-category-repository";
import { IUpdateCategoryRepository } from "@/domain/entities/contracts/update-category-repository";
import { CategoryModelPg } from "./models/category-pg";


export class CategoryPgRepositoryAdapter implements 
    IAddCategorytRepository,
    IGetCategoryRepository,
    IDeleteCategoryRepository,
    IUpdateCategoryRepository {

    // Méthode de mapping pour formater les données avant de les retourner
    map(data: any): any {
        const { id, name } = data;
        return Object.assign({}, { id: id.toString(), name });
    }

    // Implémentation de la méthode pour obtenir tous les produits
    async getCategoryRepository(): Promise<CategoryModelPg[]> {
        return await CategoryModelPg.findAll({
            attributes: { exclude: ['password'] } // Exclure le champ password
        });
    }
// add new category
      async addCategory(data: AddCategoryParams): Promise<CategoryEntity> {
       return await CategoryModelPg.create(data);
    }
    async deleteCategoryRepository(id: string | number): Promise<void> {
        const category = await CategoryModelPg.findByPk(id);
        if (!category) {
            throw new Error(`Product with id ${id} not found`);
        }
        await category.destroy();
    }
     //  update category
     async updateCategoryRepository(id: string | number, data: Partial<AddCategoryParams>): Promise<CategoryEntity> {
        const category = await CategoryModelPg.findByPk(id);
        if (!category) {
            throw new Error(`Product with id ${id} not found`);
        }
        await category.update(data);
        return this.map(category); 
    }
    }

