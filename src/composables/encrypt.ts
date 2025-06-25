import CrytoJS from 'crypto-js';

const secretKey = 'cashmynd-secret-key-0123456789';

export const encrypt = (data: string) => {
  return CrytoJS.AES.encrypt(data, secretKey).toString();
}
export const decrypt = (encrytion: string) => {
  return CrytoJS.AES.decrypt(encrytion, secretKey).toString();
}