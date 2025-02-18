import { ProductEntity } from '@/domain/entities/product';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class ProductModelPg extends Model<ProductEntity> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @Column({ type: DataType.STRING(255), allowNull: false })
  public name!: string;

  @Column({ type: DataType.TEXT }) // Changement ici pour correspondre à la BD
  public description!: string;

  @Column({ type: DataType.DECIMAL(10,2), allowNull: false }) // Correspondance exacte
  public price!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public quantity!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public stock_min!: number;

  @Column({ type: DataType.INTEGER }) // Enlever allowNull: false car il est nullable dans la BD
  public categorie_id?: number; // Correction du nom

  @Column({ type: DataType.STRING(255) })
  public image_url?: string;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  public created_at!: Date;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  public updated_at!: Date;
}
