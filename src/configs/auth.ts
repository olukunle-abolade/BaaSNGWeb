// eslint-disable-next-line import/no-anonymous-default-export
export default {
  meEndpoint: '/auth/me',
  loginEndpoint: `${process.env.NEXT_PUBLIC_BAAS_BASE_URL_KEY}/login`,
  registerEndpoint: `${process.env.NEXT_PUBLIC_BAAS_BASE_URL_KEY}/register`,
  sendOtpEndpoint: `${process.env.NEXT_PUBLIC_BAAS_BASE_URL_KEY}/records/validateotp`,
  otpEndpoint: `${process.env.NEXT_PUBLIC_BAAS_BASE_URL_KEY}/records/validateotp`,
  storageTokenKeyName: 'accessToken',
  storageDatekeyName: 'userData',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}


