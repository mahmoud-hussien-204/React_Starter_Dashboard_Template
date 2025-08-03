import { z } from 'zod';

export const notificationSettingsSchema = z.object({
  notifications: z.object({
    newForYou: z.object({
      email: z.boolean(),
      browser: z.boolean(),
      app: z.boolean(),
    }),
    accountActivity: z.object({
      email: z.boolean(),
      browser: z.boolean(),
      app: z.boolean(),
    }),
    newBrowserSignIn: z.object({
      email: z.boolean(),
      browser: z.boolean(),
      app: z.boolean(),
    }),
    newDeviceLinked: z.object({
      email: z.boolean(),
      browser: z.boolean(),
      app: z.boolean(),
    }),
  }),
});

export type INotificationSettingsSchema = z.infer<typeof notificationSettingsSchema>;
