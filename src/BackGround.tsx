type BackGroundProps = {
  src?: string;
  children: React.ReactNode;
};
export const BackGround: React.FC<BackGroundProps> = ({ src, children }) => {
  return (
    <div
      style={{ backgroundImage: src && `url(${src})` }}
      className='w-full h-full bg-cover'
    >
      <div
        style={{ backgroundImage: src && `url(${src})` }}
        className='w-full h-full bg-no-repeat bg-center backdrop-blur-md bg-white/30'
      >
        {children}
      </div>
    </div>
  );
};
