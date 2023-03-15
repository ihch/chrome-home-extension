export const saveImageToStorage = (dataURL: string) => {
  chrome.storage.local.set({ imageDataURL: dataURL });
}

export const getImageFromStorage = async () => {
  return await chrome.storage.local.get('imageDataURL');
}
