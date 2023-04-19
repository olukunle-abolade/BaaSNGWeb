export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://telvida-erp.onrender.com/api/v1/user/signin',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  storageDatekeyName: 'userData',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
