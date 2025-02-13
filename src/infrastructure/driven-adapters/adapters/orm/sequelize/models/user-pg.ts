import { Table, Column, Model,  DataType } from 'sequelize-typescript'
import { UserEntity } from "@/domain/entities/user";

@Table({ tableName: 'users' ,
 timestamps: true, 
 createdAt: 'created_at', // Sequelize enregistrera la date de création dans cette colonne
 updatedAt: 'updated_at',
})
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

    @Column({ type: DataType.STRING , allowNull: false })
    public email!: string;

    @Column({ type: DataType.STRING })
    public password!: string;
   
    @Column({ type: DataType.STRING })
    public access_token?: string; 

    @Column({
        type: DataType.ENUM("admin", "employee"), // ✅ ENUM correct
        allowNull: false,
    })
    role!: "admin" | "employee";  
   
}