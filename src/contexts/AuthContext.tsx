'use client';

// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// ** Axios
import axios from 'axios'
import axiosCookieJarSupport from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

// ** Config
import authConfig from '../../src/configs/auth'

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType, SignupOtp } from './types'
import { toast } from 'react-hot-toast';


// Enable cookie handling in Axios

// Create a new cookie jar instance
const cookieJar = new CookieJar();

// Configure Axios to use the cookie jar
axios.defaults.jar = cookieJar;
axios.defaults.withCredentials = true;

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: false,
  token: '',
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}

console.log(headers)
console.log(process.env.NEXT_PUBLIC_BAAS_API_KEY)

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [token, setToken] = useState('')
  // console.log(user)

  // ** Hooks
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   const initAuth = async (): Promise<void> => {
  //     const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
  //     setLoading(true)
  //     console.log(storedToken)
  //     if (storedToken) {
  //       const userData = JSON.parse(window.localStorage.getItem(authConfig.storageDatekeyName)!)

  //       setLoading(false)
  //       setUser(userData)
  //       setToken(storedToken)
  //       console.log(user)
  //     } else {
  //       localStorage.removeItem('userData')
  //       localStorage.removeItem('refreshToken')
  //       localStorage.removeItem('accessToken')
  //       setUser(null)
  //       setLoading(false)
  //       if (authConfig.onTokenExpiration === 'logout' && !pathname.includes('login')) {
  //         router.replace('/login')
  //       }
  //       setLoading(false)
  //     }
  //   }

  //   initAuth()
  // }, [])

  const handleLog = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    try {
      setLoading(true)
      await axios
        .post(authConfig.loginEndpoint, 
        {
          email: params.email,
          password: params.password
        },{
          headers: headers,
          withCredentials: true, // Enable sending cookies
        })
        .then(async response => {
          // params.rememberMe
          //   ? window.localStorage.setItem(authConfig.storageTokenKeyName, response?.data?.data.token)
          //   : null
          const returnUrl = searchParams.toString()
          console.log(response.headers);

           // Retrieve all stored cookies
          const cookies = cookieJar.getCookiesSync('https://sandbox-api.baas.ng/login');
          console.log(cookies);

          // setUser({ ...response?.data?.data?.user })
          // params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response?.data?.data?.user)) : null

          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/dashboard'
          console.log(user)
          router.replace(redirectURL as string)
          console.log(redirectURL)
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignup = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {
    console.log(params)
    try {
      setLoading(true)
      await axios
        .post(authConfig.otpEndpoint, 
        {
          email: params.email
        },{
          headers: headers,
        })
        .then(async response => {
          // params.rememberMe
          //   ? window.localStorage.setItem(authConfig.storageTokenKeyName, response?.data?.data.token)
          //   : null
          console.log(response);
          response.status === 200 && router.push("/auth/email-verify")
         

          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          toast.error(err.response.data.message);
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleOtp = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    console.log(params)
    try {
      setLoading(true)
      await axios
        .post(authConfig.registerEndpoint, 
        {
          email: params.email,
          password: params.password
        },{
          headers: headers,
          withCredentials: true, // Enable sending cookies
        })
        .then(async response => {
          // params.rememberMe
          //   ? window.localStorage.setItem(authConfig.storageTokenKeyName, response?.data?.data.token)
          //   : null
          console.log(response.status);
          response.status === 200 && router.push("/auth/email-verify")
         

          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          toast.error(err.response.data.message);
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }


  const handleLogout = () => {
    console.log('dfdfd')
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    token,
    login: handleLog,
    signup: handleSignup,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
