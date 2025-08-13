import { toast } from 'sonner';

const success = (message: string) => {
  toast.success(message);
};

const error = (message: string) => {
  toast.error(message);
};

const warning = (message: string) => {
  toast.warning(message);
};

const info = (message: string) => {
  toast.info(message);
};

export const notificationUtil = {
  success,
  error,
  warning,
  info,
};
