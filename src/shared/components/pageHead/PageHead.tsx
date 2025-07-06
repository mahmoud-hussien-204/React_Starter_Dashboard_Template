const PageHead = ({ children }: Required<React.PropsWithChildren>) => {
  return (
    <div className='mb-2rem gap-1rem flex flex-wrap items-center justify-between'>{children}</div>
  );
};

export default PageHead;
