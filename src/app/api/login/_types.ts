export type IUser = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: 'USER' | 'ADMIN';
};
