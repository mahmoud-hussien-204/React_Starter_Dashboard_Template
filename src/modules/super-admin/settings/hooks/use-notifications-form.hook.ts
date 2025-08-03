import { notificationSettings } from './../constants/settings.constant';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  notificationSettingsSchema,
  type INotificationSettingsSchema,
} from '../validation/notifications.schema';

import { useMemo } from 'react';

const useNotificationsForm = () => {
  const notificationsDefaultValues = useMemo(() => {
    return notificationSettings.reduce(
      (acc, item) => {
        acc[item.id] = {
          email: item.email,
          browser: item.browser,
          app: item.app,
        };
        return acc;
      },
      {} as INotificationSettingsSchema['notifications']
    );
  }, []);

  const form = useForm<INotificationSettingsSchema>({
    resolver: zodResolver(notificationSettingsSchema),
    mode: 'all',
    defaultValues: {
      notifications: notificationsDefaultValues,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return { onSubmit, form, isPending: false };
};

export default useNotificationsForm;
