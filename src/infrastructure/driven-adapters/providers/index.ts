import { ADD_USER_REPOSITORY } from "@/domain/entities/contracts/add-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { UserPgRepositoryAdapter } from "../adapters/orm/sequelize/user-pg-repository-adapter";

export const adapters = [{
    useClass: UserPgRepositoryAdapter,
    provide: ADD_USER_REPOSITORY
}];
        
export const services = [
    {
        useClass: AddUserServiceImpl,
        provide: ADD_USER_SERVICE
    }
];