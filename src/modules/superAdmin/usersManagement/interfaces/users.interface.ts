export interface IUser {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  role: 'super-admin' | 'admin' | 'user';
  status: boolean;
  KYC_status: number;
  id: string;
}

type IUserForm = Omit<IUser, 'id' | 'createdAt' | 'KYC_status'> & {
  image?: File;
};

export type ICreateUserForm = IUserForm;

export type IEditUserForm = Partial<IUserForm> & { id: string };
