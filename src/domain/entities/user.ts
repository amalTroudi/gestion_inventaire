export type UserEntity = {
  id: string | number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "employee"; 
  access_token?: string;
};
// export type UserRoleModel = [
//   {
//       role: string
//   }
// ]
export type AddUserParams = Omit<UserEntity, 'id'>
