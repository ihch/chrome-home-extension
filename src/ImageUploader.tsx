import PhotoSVG from './assets/photo.svg';

type ImageUploaderProps = {
  onInput: React.FormEventHandler<HTMLInputElement>;
};
export const ImageUploader: React.FC<ImageUploaderProps> = ({ onInput }) => {
  return (
    <div className='absolute right-10 top-10'>
      <label className='flex justify-center items-center w-10 h-10 border-2 rounded-full border-gray-500 cursor-pointer'>
        <img src={PhotoSVG} alt='background image setting' className='w-3/4 h-3/4 m-auto color-gray-500' />
        <input type='file' onInput={onInput} className='hidden' />
      </label>
    </div>
  );
};
