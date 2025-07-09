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
