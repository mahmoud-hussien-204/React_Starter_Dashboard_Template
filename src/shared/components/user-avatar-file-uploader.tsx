import useFileUploader from '@/shared/hooks/use-file-uploader.hook';

import { PenIcon, TrashIcon } from 'lucide-react';

import { useState } from 'react';

interface IProps {
  src?: string;
  id: string;
  setFieldValue: (url: string) => void;
}

const avatarTest = import.meta.env.VITE_APP_AVATAR_TEST;

const UserAvatarFileUploader = ({ src, id, setFieldValue }: IProps) => {
  const [fileSrc, setFileSrc] = useState(src);

  const { onFileChange, fileURL, reset } = useFileUploader();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileURL = onFileChange(e);
    if (fileURL) {
      setFieldValue(avatarTest || fileURL);
    }
  };

  const handleDelete = () => {
    reset();
    setFileSrc('');
    setFieldValue('');
  };

  return (
    <div className='gap-1rem flex items-center'>
      <input type='file' hidden id={id} onChange={handleInputChange} />
      {/* preview  */}
      <div className='size-4rem bg-muted relative rounded-md'>
        {(fileURL || fileSrc) && (
          <img src={fileURL || fileSrc} className='size-full rounded-md object-cover' />
        )}
        <label
          htmlFor={id}
          className='size-1.5rem hover:bg-primary hover:text-primary-foreground bg-background absolute -bottom-2 -end-2 flex cursor-pointer items-center justify-center rounded-full shadow'
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
          className='gap-0.25rem text-accent-foreground flex cursor-pointer items-center text-sm disabled:cursor-not-allowed disabled:opacity-50'
          onClick={handleDelete}
          disabled={!fileURL && !fileSrc}
        >
          <TrashIcon size={14} />
          Remove avatar
        </button>
      </div>
    </div>
  );
};

export default UserAvatarFileUploader;
