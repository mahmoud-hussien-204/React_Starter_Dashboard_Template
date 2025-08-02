export interface ISettings {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface ISettingsOutletContext {
  settings: ISettings | undefined;
}
