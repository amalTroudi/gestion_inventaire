export type CategoryEntity = {
    id: number;
    name: string;
  };
  
  export type AddCategoryParams = Omit<CategoryEntity, 'id'>;
  