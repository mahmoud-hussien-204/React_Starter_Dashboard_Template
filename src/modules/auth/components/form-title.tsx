interface IProps {
  title: string;
  description: string;
}

const FormTitle = ({ description, title }: IProps) => {
  return (
    <div className='gap-0.5rem mb-2rem flex flex-col'>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <h5 className='text-muted-foreground text-lg'>{description}</h5>
    </div>
  );
};

export default FormTitle;
