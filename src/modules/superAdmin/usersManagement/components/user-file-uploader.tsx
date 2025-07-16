import { PenIcon, TrashIcon } from 'lucide-react';

interface IProps {
  src?: string;
  id: string;
}

const UserFileUploader = ({ src, id }: IProps) => {
  return (
    <div className='gap-1rem flex items-center'>
      <input type='file' hidden id={id} />
      {/* preview  */}
      <div className='size-4rem bg-muted relative rounded-md'>
        <img src={src} className='size-full rounded-md object-cover' />
        <label
          htmlFor={id}
          className='size-1.5rem hover:bg-primary hover:text-primary-foreground absolute -bottom-2 -end-2 flex cursor-pointer items-center justify-center rounded-full bg-white shadow'
        >
          <PenIcon size={14} />
        </label>
      </div>

      <div>
        <label htmlFor={id} className='mb-0.25rem block'>
          Upload your avatar
        </label>
        <button
          type='button'
          className='gap-0.25rem text-accent-foreground flex cursor-pointer items-center text-sm'
        >
          <TrashIcon size={14} />
          Remove avatar
        </button>
      </div>
    </div>
  );
};

export default UserFileUploader;
