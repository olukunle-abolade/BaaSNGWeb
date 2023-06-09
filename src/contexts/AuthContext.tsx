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
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType, SignupOtp, StepperValuesType } from './types'
import { toast } from 'react-hot-toast';
import { PassThrough } from 'stream';


// Enable cookie handling in Axios

// Create a new cookie jar instance
const cookieJar = new CookieJar();

// Configure Axios to use the cookie jar
axios.defaults.jar = cookieJar;
axios.defaults.withCredentials = true;

// ** Defaults
export const defaultProvider: AuthValuesType = {
  user: null,
  loading: false,
  token: '',
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  pass: () => Promise.resolve(),
  otp: () => Promise.resolve(),
  signinOtp: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

export const StepperProvider: StepperValuesType = {
  userData: null,
  setUserData: () => null,
}

 const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const headers = {
  'Content-Type': 'application/json',
  'X-API-Key': process.env.NEXT_PUBLIC_BAAS_API_KEY
}


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


  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setLoading(true)
    if (!user) {
        // const userData = JSON.parse(window.localStorage.getItem(authConfig.storageDatekeyName)!)

        setLoading(false)
        // setUser(userData)
        // setToken(storedToken)
        router.push('/')

        console.log(user)
      } else {
        // setUser(null)
        // setLoading(false)
        // if (user === null) {
        //   router.push('/')
        // }
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const handleLog = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
    console.log(headers)
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
          // const cookies = cookieJar.getCookiesSync('https://sandbox-api.baas.ng/login');
          console.log(response?.data);

          setUser({ ...response?.data })
          // params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response?.data?.data?.user)) : null

         
          try {
            setLoading(true)
            await axios
            .post(authConfig.sendOtpEndpoint, 
            {
              email: params.email,
            },{
              headers: headers,
              withCredentials: true, // Enable sending cookies
            })
            .then(async response => {
              console.log(response)
              if(response.status === 200) {
                const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/auth/signin-verification'
                router.replace(redirectURL as string)
              }
              setLoading(false)
            }) .catch(err => {
              if (errorCallback) errorCallback(err)
            })
          } catch (err:any) {
            if(err.response.data.message){
              toast.success("error");
              toast.error(err.response.data.message);
            }else{
              toast.error("Network error, Check your network settings");
            }
            setLoading(false)
            //  toast.error("net::ERR_INTERNET_DISCONNECTED");
          }
         
        })
        .catch(err => {
          if (errorCallback) errorCallback(err)
          // toast.error(err);
          toast.error(err.response?.data?.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleSignup = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {
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
          setUser({...params})
            if(response.status === 200) {
            try {
              setLoading(true)
              await axios
              .post(authConfig.sendOtpEndpoint, 
              {
                email: params.email,
              },{
                headers: headers,
                withCredentials: true, // Enable sending cookies
              })
              .then(async response => {
                console.log(response)
                response.status === 200 && router.push("/auth/email-verify")
                setLoading(false)
              }) .catch(err => {
                if (errorCallback) errorCallback(err)
              })
            } catch (err) {
              setLoading(false)
              //  toast.error("net::ERR_INTERNET_DISCONNECTED");
            }
           
          }
         
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          if(err.response.data.message){
            toast.success("error");
            toast.error(err.response.data.message);
          }else{
            toast.error("Network error, Check your network settings");
          }
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleOtp = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {
    try {
      setLoading(true)
      await axios
      .get( `${authConfig.otpEndpoint}?filter=email,eq,${params.email}&filter=token,eq,${params.otp}`, 
      {
          headers: headers,
          withCredentials: true, // Enable sending cookies
        })
        .then(async response => {

          console.log(response);
          response.status === 200 && router.push("/auth/email-success")
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          toast.error(err.response.data.message);
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handleSigninOtp = async (params: SignupOtp, errorCallback?: ErrCallbackType) => {
    // console.log(params.otp)
    if( params.otp === '') {
      toast.error("OTP cannot be empty")
      return
    }
    if(typeof params.email === "undefined") {
      toast.error("Email not defined, go back to Login and Try again")
      return
    }
    try {
      setLoading(true)
      await axios
        .get( `${authConfig.otpEndpoint}?filter=email,eq,${params.email}&filter=token,eq,${params.otp}`, 
        {
          headers: headers,
          withCredentials: true, 
        })
        .then(async response => {
         const data = response.data?.records
         !data.length ? toast.error("Incorrect OTP, Try again")
         : router.push("/auth/signin-email-success")

          // console.log(response.data?.records);
          // response.status === 200 
          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          toast.error(err.response.data.message);
          console.log(err.response.data.message)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      toast.error("net::ERR_INTERNET_DISCONNECTED");
    }
  }

  const handlePass = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
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
          console.log(response)
          
          // const returnUrl = searchParams.toString()

          // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/dashboard'
          // router.replace(redirectURL as string)
          setUser({...response.data})
          response.status === 200 && router.push("/auth/profile")

          setLoading(false)
        })

        .catch(err => {
          if (errorCallback) errorCallback(err)
          toast.error(err.response.data.message)
          console.log(err)
          setLoading(false)
        })
    } catch (err) {
      setLoading(false)
      toast.error("net::ERR_INTERNET_DISCONNECTED");
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
    otp: handleOtp,
    signinOtp: handleSigninOtp,
    pass: handlePass,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }



// handleSignin -> signin-verification -> signin-otp -> signin-email-success -> Go to Dashboard

// handleSignUp -> signin-verification -> 