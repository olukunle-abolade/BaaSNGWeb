/** Image unto base 64 */
export function convertToBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => reject(error);
  });
}


export const NumberFormat = (number: any) => {
  const formattedNumber = number?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
return formattedNumber
}