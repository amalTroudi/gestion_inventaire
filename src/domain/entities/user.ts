export type UserEntity = {
    id: string | number;
  name: string;
  email: string;
  password : string; 
  role : string ; 
  created_at : Date ; 
  updated_at : Date ; 
}

export type AddUserParams = Omit<UserEntity, 'id'>
