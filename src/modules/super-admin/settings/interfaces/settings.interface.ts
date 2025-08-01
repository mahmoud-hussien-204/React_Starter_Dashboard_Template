export interface ISettings {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
}

export interface ISettingsOutletContext {
  settings: ISettings | undefined;
}
