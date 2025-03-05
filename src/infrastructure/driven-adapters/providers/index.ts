import { ADD_PRODUCT_REPOSITORY } from "@/domain/entities/contracts/add-product-repository";
import { ADD_USER_REPOSITORY } from "@/domain/entities/contracts/add-user-repository";
import { ADD_CATEGORY_REPOSITORY } from "@/domain/entities/contracts/add_category_repository";
import { AUTHENTICATION_REPOSITORY } from "@/domain/entities/contracts/authentification-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/entities/contracts/check_email_repository";
import { DECRYPT_REPOSITORY } from "@/domain/entities/contracts/decrypt-repository";
import { DELETE_CATEGORY_REPOSITORY } from "@/domain/entities/contracts/delete-category_repository";
import { DELETE_PRODUCT_REPOSITORY } from "@/domain/entities/contracts/delete-product-repository";
import { DELETE_USER_REPOSITORY } from "@/domain/entities/contracts/delete-user-repository";
import { ENCRYPT_REPOSITORY } from "@/domain/entities/contracts/encrypt-repositor";
import {  GET_Category_REPOSITORY } from "@/domain/entities/contracts/get-category-repository";
import { GET_PRODUCTS_REPOSITORY } from "@/domain/entities/contracts/get-product-repository";
import { GET_USERS_REPOSITORY } from "@/domain/entities/contracts/get-user-repository";
import { HASH_COMPARE_REPOSITORY } from "@/domain/entities/contracts/hash-compare-repository";
import { HASH_REPOSITORY } from "@/domain/entities/contracts/hash-repository";
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/entities/contracts/update-access-token-repository";
import { UPDATE_CATEGORY_REPOSITORY } from "@/domain/entities/contracts/update-category-repository";
import { UPDATE_PRODUCT_REPOSITORY } from "@/domain/entities/contracts/update-product-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/entities/contracts/update-user-repository";
import { ADD_CATEGORY_SERVICE } from "@/domain/use-cases/add-category-service";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { ADD_PRODUCT_SERVICE } from "@/domain/use-cases/add_product-service";
import { AUTHENTICATION_SERVICE } from "@/domain/use-cases/authentification-service";
import { DELETE_CATEGORY_SERVICE } from "@/domain/use-cases/delete-category-service";
import { DELETE_PRODUCT_SERVICE } from "@/domain/use-cases/delete-product-service";
import { DELETE_USER_SERVICE } from "@/domain/use-cases/delete-user-service";
import { GET_CATEGORY_SERVICE } from "@/domain/use-cases/get-category-service";
import { GET_PRODUCTS_SERVICE } from "@/domain/use-cases/get-product-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/get-user-service";
import { AddCategoryServiceImpl } from "@/domain/use-cases/impl/add-category-service_impl";
import { AddProductServiceImpl } from "@/domain/use-cases/impl/add-product-service_impl";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { AuthenticationServiceImpl } from "@/domain/use-cases/impl/authentification-service-impl";
import { DeleteCategoryServiceImpl } from "@/domain/use-cases/impl/delete-category-service-impl";
import { DeleteProductServiceImpl } from "@/domain/use-cases/impl/delete-product-service_impl";
import { DeleteUserServiceImpl } from "@/domain/use-cases/impl/delete-user-service-impl";
import { GetCategoryServiceImpl } from "@/domain/use-cases/impl/get-category-service-impl";
import { GetProductsServiceImpl } from "@/domain/use-cases/impl/get-product-service_impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";
import { UpdateCategoryServiceImpl } from "@/domain/use-cases/impl/update-category_service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/update-user-service-impl";
import { UpdateProductServiceImpl } from "@/domain/use-cases/impl/update_product-service-impl";
import { UPDATE_CATEGORY_SERVICE } from "@/domain/use-cases/update-category-service";
import { UPDATE_PRODUCT_SERVICE } from "@/domain/use-cases/update-product-service";
import { UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import { BcryptAdapter } from "../adapters/bcrypt-adapter";
import { JwtAdapter } from "../adapters/jwt-adapter";
import { CategoryPgRepositoryAdapter } from "../adapters/orm/sequelize/category-pg-repository-adapter";
import { ProductPgRepositoryAdapter } from "../adapters/orm/sequelize/products-pg-repository-adapter";
import { UserPgRepositoryAdapter } from "../adapters/orm/sequelize/user-pg-repository-adapter";

export const adapters = [{
    useClass: UserPgRepositoryAdapter,
    provide: ADD_USER_REPOSITORY
},{
    useClass: ProductPgRepositoryAdapter,
    provide: ADD_PRODUCT_REPOSITORY
},
{
    useClass: CategoryPgRepositoryAdapter,
    provide: ADD_CATEGORY_REPOSITORY
},{
    provide: CHECK_EMAIL_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},
{
    provide: UPDATE_ACCESS_TOKEN_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},{
    provide: GET_USERS_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},{
    provide: GET_Category_REPOSITORY,
    useClass: CategoryPgRepositoryAdapter
},{
    provide: GET_PRODUCTS_REPOSITORY,
    useClass: ProductPgRepositoryAdapter,
},{
    provide : DELETE_USER_REPOSITORY, 
    useClass : UserPgRepositoryAdapter
},
{
    provide : DELETE_CATEGORY_REPOSITORY, 
    useClass : CategoryPgRepositoryAdapter
},{
    provide : DELETE_PRODUCT_REPOSITORY, 
    useClass : ProductPgRepositoryAdapter
}, {
    provide : UPDATE_USER_REPOSITORY , 
    useClass : UserPgRepositoryAdapter
   },{
    provide : UPDATE_PRODUCT_REPOSITORY , 
    useClass : ProductPgRepositoryAdapter
   },{
    provide : UPDATE_CATEGORY_REPOSITORY , 
    useClass : CategoryPgRepositoryAdapter
   },{
    provide: HASH_REPOSITORY,
    useClass: BcryptAdapter,

},{
    provide: HASH_COMPARE_REPOSITORY,
    useClass: BcryptAdapter,
},{
    provide: ENCRYPT_REPOSITORY,
    useClass: JwtAdapter,
},{
    provide: DECRYPT_REPOSITORY,
    useClass: JwtAdapter,
},{
    provide: AUTHENTICATION_REPOSITORY,
    useClass: UserPgRepositoryAdapter,
},];
        
export const services = [
    {
        useClass: AddUserServiceImpl,
        provide: ADD_USER_SERVICE
    },{
        useClass: AddCategoryServiceImpl,
        provide: ADD_CATEGORY_SERVICE
    },{
        useClass: AddProductServiceImpl,
        provide: ADD_PRODUCT_SERVICE
    },
    {
        provide: GET_USERS_SERVICE,
       useClass: GetUsersServiceImpl,
   
   }, {
    provide: GET_PRODUCTS_SERVICE,
   useClass: GetProductsServiceImpl,

}, {
    provide: GET_CATEGORY_SERVICE,
   useClass: GetCategoryServiceImpl,

}, 
   
   {
    provide : DELETE_USER_SERVICE , 
    useClass : DeleteUserServiceImpl
   },{
    provide : DELETE_CATEGORY_SERVICE , 
    useClass : DeleteCategoryServiceImpl
   },{
    provide : DELETE_PRODUCT_SERVICE , 
    useClass : DeleteProductServiceImpl
   }, {
    provide : UPDATE_USER_SERVICE , 
    useClass : UpdateUserServiceImpl
   },{
    provide : UPDATE_CATEGORY_SERVICE , 
    useClass : UpdateCategoryServiceImpl
   },{
    provide : UPDATE_PRODUCT_SERVICE , 
    useClass : UpdateProductServiceImpl
   },{

    provide: AUTHENTICATION_SERVICE,
    useClass: AuthenticationServiceImpl,
},
];