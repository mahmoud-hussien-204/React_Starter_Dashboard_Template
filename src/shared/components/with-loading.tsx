import { Loader2Icon } from 'lucide-react';

interface IProps extends React.PropsWithChildren {
  isLoading: boolean;
}

const WithLoading = ({ isLoading, children }: IProps) => {
  return isLoading ? <Loading /> : children;
};

export default WithLoading;

export const Loading = () => {
  return (
    <div className='gap-0.5rem flex h-[calc(100svh-250px)] items-center justify-center text-lg'>
      <Loader2Icon className='-mt-0.5rem animate-spin' size={24} />
      <div className='animate-bounce'>Loading...</div>
    </div>
  );
};
