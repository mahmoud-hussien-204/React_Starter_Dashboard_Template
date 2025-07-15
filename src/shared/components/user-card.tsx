interface IProps {
  src?: string;
  title?: string;
  subtitle?: string;
}

const UserCard = ({ src, subtitle, title }: IProps) => {
  return (
    <div className='gap-0.5rem flex items-center'>
      {src && <img src={src} alt={title} className='size-10 rounded-full' />}
      <div>
        {title && <h6>{title}</h6>}
        {subtitle && <span className='text-foreground text-xs'>{subtitle}</span>}
      </div>
    </div>
  );
};

export default UserCard;
