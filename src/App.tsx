import { useCallback, useEffect, useState } from 'react'

import './index.css';
import { getImageFromStorage, saveImageToStorage } from "./storage";

import PhotoSVG from './assets/photo.svg';

type ImageUploaderProps = {
  onInput: React.FormEventHandler<HTMLInputElement>;
}

const useImageStateChromeExtensionStorage = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    getImageFromStorage().then((value) => {
      setSrc(value['imageDataURL']);
    });
  });

  const onImageInput = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files || event.currentTarget.files.length <= 0) {
      return;
    }

    const image = event.currentTarget.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      if (typeof reader.result != 'string') {
        return;
      }

      setSrc(reader.result);
      saveImageToStorage(reader.result);
    }

    reader.readAsDataURL(image);
  }, [setSrc]);

  return {
    onImageInput,
    src,
  };
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onInput }) => {
  return (
    <div className='absolute right-10 top-10'>
      <label className='flex justify-center items-center w-10 h-10 border-2 rounded-full border-gray-500 cursor-pointer'>
        <img src={PhotoSVG} alt='background image setting' className='w-3/4 h-3/4 m-auto color-gray-500' />
        <input type='file' onInput={onInput} className='hidden' />
      </label>
    </div>
  )
}

type BackGroundProps = {
  src?: string;
  children: React.ReactNode;
}

const BackGround: React.FC<BackGroundProps> = ({ src, children }) => {
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
  )
}

const App = () => {
  const { onImageInput, src } = useImageStateChromeExtensionStorage();

  return (
    <main className='w-screen h-screen relative'>
      <BackGround src={src}>
        <ImageUploader onInput={onImageInput} />
      </BackGround>
    </main>
  )
}

export default App
