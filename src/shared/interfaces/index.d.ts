interface IUserData {
  id: string;
  name: string;
  email: string;
  token: string;
  role: IRole;
  avatar: string;
}

type IRole = 'admin' | 'teacher' | 'student';
