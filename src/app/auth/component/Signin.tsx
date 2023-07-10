'use client'

import Link from 'next/link';

// ** MUI
import { Checkbox, FormControlLabel } from '@mui/material';

// ** Third Party
import { FormProvider, useForm } from 'react-hook-form';
import { ThreeDots } from 'react-loading-icons';

// ** Images
import Google from "@/assets/google.png"

// ** Themes
import { COLORS } from '@/assets/theme/theme';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';

// ** Componentas
import CustomButton from '@/components/user/CustomButton';
import { CustomTextField } from '@/components/FormComponent';
import RestCountries from '@/components/ReactCountriesInput';
import Loader from '@/components/Loader';

interface UserData {
  email: string
  password: string
}

const defaultValues = {
  email: 'ab3sure@gmail.com',
  password: 'P@ssword88283'
}

// const defaultValues = {
//   email: '',
//   password: ''
// }

const Signin = () => {
  const methods = useForm({defaultValues});

  // ** Hooks
  const auth = useAuth()

  const onSubmit = async (data: UserData) => {
    const { email, password } = data
    auth.login({ email, password }, () => {
      
    })
  };

  const handleCountryChange = (value: any) => {
    // Handle country change logic here
    console.log('Selected country:', value);
  };

  return (
    <FormProvider {...methods}>
      <form noValidate autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomTextField
          label="Email "
          type="email"
          name='email'
          placeholder="Enter  your email address"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          }}
        />

        <CustomTextField
          label="Password"
          name='password'
          placeholder="Enter your password"
          type="password"
          password
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character'
            }
          }}
        />

        <div className="flex justify-between items-center">
          <FormControlLabel
            control={<Checkbox required />}
            label="Remember me for 30days"
            sx={{fontSize: 14}}
            className="text-kblackCom text-sm font-normal "
            aria-required 
          />

          <Link
            href="/auth/forget-password"
            className="text-kprimary text-sm font-normal "
          >
            Forget Password
          </Link>
        </div>

        <div className='space-y-4 mt-8'>
            {auth.loading ? (
                <ThreeDots width={30} className='loading-circle mx-auto' stroke='#210590' fill='#210590' />
              ) : (
                <CustomButton title="Sign In" type ="submit"  />
              )}
          <CustomButton iconImage={Google} title="Sign in with Google" titleColor={COLORS.black} textStyle={{marginLeft: 10}} buttonColor="transparent" buttonStyle={styles.google} onClick={()=> {}} />
        </div>

        <div className='flex flex-row space-x-1 items-center justify-center mt-10'>
          {/* text */}
          <h3 className='text-n100 text-sm font-normal'>Don’t have an account?</h3>
          {/* link */}
          <Link href={"/auth/signup"} className='text-kprimary text-sm font-semibold '>Sign Up</Link>
        </div>
      </form>
      {/* <Loader/> */}
    </FormProvider>
  )
}

export default Signin

const styles = {
  google: {
    display: "flex",
    aliginItems: "center",
    justifyContent: "center",
    borderColor: "#757575",
    borderWidth: 1
  },
}