interface IUserData {
  id: string;
  name: string;
  email: string;
  token: string;
  role: IUserRole;
  avatar: string;
}

type IUserRole = `${import('../enums/index.enum').EnumUserRoles}`;

type IAppMainLayouts = `${import('../enums/index.enum').EnumAppMainLayouts}`;

interface IDialogPropsData {
  closeDialog: () => void;
}
