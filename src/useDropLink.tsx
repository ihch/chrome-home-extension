import { useCallback, useState } from 'react';

export const useDropLink = () => {
  const [url, setUrl] = useState('');

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setUrl(event.dataTransfer.getData('text'));
  }, [setUrl]);

  return {
    onDragOver,
    onDrop,
    url,
  };
};
