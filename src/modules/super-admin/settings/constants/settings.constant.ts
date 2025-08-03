export const notificationSettings = [
  {
    id: 'newForYou',
    type: 'New For You',
    email: true,
    browser: true,
    app: true,
  },
  {
    id: 'accountActivity',
    type: 'Account activity',
    email: false,
    browser: true,
    app: true,
  },
  {
    id: 'newBrowserSignIn',
    type: 'A new browser used to sign in',
    email: true,
    browser: false,
    app: true,
  },
  {
    id: 'newDeviceLinked',
    type: 'A new device is linked',
    email: true,
    browser: false,
    app: false,
  },
] as const;
