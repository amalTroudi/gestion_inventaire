import { ADD_USER_REPOSITORY } from "@/domain/entities/contracts/add-user-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/entities/contracts/check_email_repository";
import { DELETE_USER_REPOSITORY } from "@/domain/entities/contracts/delete-user-repository";
import { GetUsersRepositoryImpl, GET_USERS_REPOSITORY } from "@/domain/entities/contracts/get-user-repository";
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/entities/contracts/update-access-token-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/entities/contracts/update-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { DELETE_USER_SERVICE } from "@/domain/use-cases/delete-user-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/get-user-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { DeleteUserServiceImpl } from "@/domain/use-cases/impl/delete-user-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/update-user-service-impl";
import { UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import { UserPgRepositoryAdapter } from "../adapters/orm/sequelize/user-pg-repository-adapter";

export const adapters = [{
    useClass: UserPgRepositoryAdapter,
    provide: ADD_USER_REPOSITORY
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
    provide : DELETE_USER_REPOSITORY, 
    useClass : UserPgRepositoryAdapter
}, {
    provide : UPDATE_USER_REPOSITORY , 
    useClass : UserPgRepositoryAdapter
   }];
        
export const services = [
    {
        useClass: AddUserServiceImpl,
        provide: ADD_USER_SERVICE
    },
    {
        provide: GET_USERS_SERVICE,
       useClass: GetUsersServiceImpl,
   
   }, 
   {
    provide : DELETE_USER_SERVICE , 
    useClass : DeleteUserServiceImpl
   }, {
    provide : UPDATE_USER_SERVICE , 
    useClass : UpdateUserServiceImpl
   }
];