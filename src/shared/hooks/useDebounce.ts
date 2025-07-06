const useDebounce = () => {
  const debounce = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (args: unknown) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(args);
      }, delay);
    };
  };

  return { debounce };
};

export default useDebounce;
