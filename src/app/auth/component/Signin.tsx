'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ** MUI
// import { Checkbox, FormControlLabel } from '@mui/material';

// ** Third Party
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { ThreeDots } from 'react-loading-icons';

// ** Images
import Google from "@/assets/google.png"

// ** Themes
import { COLORS } from '@/assets/theme/theme';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';

// ** Componentas
import CustomButton from '@/components/user/CustomButton';
import { CustomTextField, PasswordField, TextField } from '@/components/FormComponent';

interface UserData {
  email: string
  password: string
}

const defaultValues = {
  email: 'ab3sure@gmail.com',
  password: 'P@ssword88283'
}

const Signin = () => {
  const methods = useForm({defaultValues});

  // ** Hooks
  const auth = useAuth()
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const { email, password, setError } = data
    auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
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
          // rules={{
          //   required: 'Email is required',
          //   pattern: {
          //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //     message: 'Invalid email address'
          //   }
          // }}
        />

        <div className="flex justify-between items-center">
          {/* <Checkbox label = ""  /> */}
          {/* <FormControlLabel
            control={<Checkbox />}
            label="Remember me for 30days"
            className="text-kblackCom text-sm font-normal "
          /> */}

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