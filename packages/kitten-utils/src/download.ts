/**
 * Fetch file
 * @param url
 * @returns Promise<Blob>
 */
export function getFile(url: string) {
  return fetch(url)
    .then((response) => response.blob())
    .catch((error) => {
      console.error(`getFile: ${error}`);
      throw error;
    });
}

/**
 * Download file from blob
 * @param blob
 * @param fileName
 */
export function downloadFile(blob: Blob, fileName: string) {
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = fileName.trim();
  link.href = downloadUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Fetch file and download file
 * @param url
 * @param fileName
 */
export function getFileAndDownload(url: string, fileName: string) {
  getFile(url)
    .then((blob) => {
      downloadFile(blob, fileName);
    })
    .catch((error) => {
      console.error(`getFileAndDownload: ${error}`);
      throw error;
    });
}
