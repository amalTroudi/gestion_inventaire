import { Table, Column, Model,  DataType } from 'sequelize-typescript'
import { UserEntity } from "@/domain/entities/user";

@Table({ tableName: 'users' })
export class UserModelPg extends Model<UserEntity> {
    // Implementation
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    public id!: number;

    @Column({ type: DataType.STRING })
    public name!: string;

    @Column({ type: DataType.STRING })
    public email!: string;

    @Column({ type: DataType.STRING })
    public password!: string;
   
    @Column({ type: DataType.STRING })
    public accessToken?: string; 

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    public role!: string; 
    @Column({ type: DataType.DATE })
    public created_at!: Date; 
    
    @Column({ type: DataType.DATE })
    public updated_at!: Date; 

}