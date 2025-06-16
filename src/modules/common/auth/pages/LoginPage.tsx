import { authSlice } from '../store';

import { useAppSelector } from '@/shared/hooks/useStore';

import { rootReducer, store } from '@/core/store';

// Inject the slice into the root reducer
const withAuthSlice = rootReducer.inject(authSlice);

// Replace the store's reducer with the updated one
store.replaceReducer(withAuthSlice);

const LoginPage = () => {
  const email = useAppSelector((state) => state.auth?.email);
  return <div>LoginPage {email} </div>;
};

export default LoginPage;
