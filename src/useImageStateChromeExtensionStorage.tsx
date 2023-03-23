import { useCallback, useEffect, useState } from 'react';
import { getImageFromStorage, saveImageToStorage } from "./storage";

export const useImageStateChromeExtensionStorage = () => {
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
    };

    reader.readAsDataURL(image);
  }, [setSrc]);

  return {
    onImageInput,
    src,
  };
};
