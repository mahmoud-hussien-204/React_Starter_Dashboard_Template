import { useState } from 'react';

const useToggler = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle] as const;
};

export default useToggler;
