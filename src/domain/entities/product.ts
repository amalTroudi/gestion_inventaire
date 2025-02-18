export type ProductEntity = {
  id: number;
  name: string;
  description?: string; // Optionnel, car nullable en BD
  price: number;
  quantity: number;
  stock_min: number;
  categorie_id?: number; // Correction du nom + optionnel car nullable
  image_url?: string;
  created_at: Date;
  updated_at: Date;
};

export type AddProductParams = Omit<ProductEntity, 'id' | 'created_at' | 'updated_at'>;
