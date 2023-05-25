export function getFilteredPhoto(file: any) {
  if (/\.(jpg|jpeg|png|webp|JPG|PNG|JPEG|WEBP)$/.test(file.name)) {
    return true
  }
  return false
}

export function checkSizeCompatibleOne(file: any) {
  const sizeInMb = (file.size / (1024 * 1024)).toFixed(2)
  if (Number(sizeInMb) > 5) {
    return false
  }
  return true
}
