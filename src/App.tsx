import './index.css';

import { useImageStateChromeExtensionStorage } from './useImageStateChromeExtensionStorage';
import { useDropLink } from './useDropLink';
import { BackGround } from './BackGround';
import { ImageUploader } from './ImageUploader';

const App = () => {
  const { onImageInput, src } = useImageStateChromeExtensionStorage();
  const { onDragOver, onDrop, url } = useDropLink();

  return (
    <main className='w-screen h-screen relative'>
      <BackGround src={src}>
        <ImageUploader onInput={onImageInput} />
        <div className='w-full h-full' onDrop={onDrop} onDragOver={onDragOver}>
          <h2 className='bold'>Hoge</h2>
          {url && (
            <a href={url} className='text-blue-400 underline'>{url}</a>
          )}
        </div>
      </BackGround>
    </main>
  )
}

export default App
