import { CategoryEntity } from '@/domain/entities/category';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  timestamps: false,
//   createdAt: 'created_at',
//   updatedAt: 'updated_at',
})
export class CategoryModelPg extends Model<CategoryEntity> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @Column({ type: DataType.STRING(255), allowNull: false })
  public name!: string;

  }
