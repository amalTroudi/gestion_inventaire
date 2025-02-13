import { ADD_USER_REPOSITORY } from "@/domain/entities/contracts/add-user-repository";
import { AUTHENTICATION_REPOSITORY } from "@/domain/entities/contracts/authentification-repository";
import { CHECK_EMAIL_REPOSITORY } from "@/domain/entities/contracts/check_email_repository";
import { DECRYPT_REPOSITORY } from "@/domain/entities/contracts/decrypt-repository";
import { DELETE_USER_REPOSITORY } from "@/domain/entities/contracts/delete-user-repository";
import { ENCRYPT_REPOSITORY } from "@/domain/entities/contracts/encrypt-repositor";
import { GET_USERS_REPOSITORY } from "@/domain/entities/contracts/get-user-repository";
import { HASH_COMPARE_REPOSITORY } from "@/domain/entities/contracts/hash-compare-repository";
import { HASH_REPOSITORY } from "@/domain/entities/contracts/hash-repository";
import { UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/entities/contracts/update-access-token-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/entities/contracts/update-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { AUTHENTICATION_SERVICE } from "@/domain/use-cases/authentification-service";
import { DELETE_USER_SERVICE } from "@/domain/use-cases/delete-user-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/get-user-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { AuthenticationServiceImpl } from "@/domain/use-cases/impl/authentification-service-impl";
import { DeleteUserServiceImpl } from "@/domain/use-cases/impl/delete-user-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/update-user-service-impl";
import { UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import { BcryptAdapter } from "../adapters/bcrypt-adapter";
import { JwtAdapter } from "../adapters/jwt-adapter";
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
   },{

    provide: AUTHENTICATION_SERVICE,
    useClass: AuthenticationServiceImpl,
},
];