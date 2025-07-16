import { useEffect, useState } from 'react';

const useFileUploader = () => {
  const [file, setFile] = useState<File>();

  const [fileURL, setFileURL] = useState<string>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFileURL(fileURL);
      return fileURL;
    }
  };

  const reset = () => {
    setFile(undefined);
    setFileURL(undefined);
  };

  useEffect(() => {
    return () => {
      if (fileURL) {
        URL.revokeObjectURL(fileURL);
      }
    };
  }, []);

  return {
    file,
    fileURL,
    onFileChange,
    reset,
  };
};

export default useFileUploader;
