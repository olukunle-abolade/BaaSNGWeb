// eslint-disable-next-line import/no-anonymous-default-export
export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://sandbox-api.baas.ng/login',
  registerEndpoint: 'https://sandbox-api.baas.ng/register',
  otpEndpoint: 'https://sandbox-api.baas.ng/records/validateotp',
  storageTokenKeyName: 'accessToken',
  storageDatekeyName: 'userData',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
