'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ** MUI
import { Checkbox, FormControlLabel } from '@mui/material';

// ** Third Party
import { useForm } from 'react-hook-form';
import { ThreeDots } from 'react-loading-icons';

// ** Images
import Google from "@/assets/google.png"

// ** Themes
import { COLORS } from '@/assets/theme/theme';

// ** Layout
import AuthLayout from '@/layouts/AuthLayout';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';

// ** Componentas
import CustomButton from '@/components/user/CustomButton';
import { PasswordField, TextField } from '@/components/FormComponent';

interface UserData {
  email: string
  password: string
}

const defaultValues = {
  email: 'ab3sure@gmail.com',
  password: 'P@ssword88283'
}

const Login = () => {
  const { handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange',
  });

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
    <div>
      <AuthLayout
        title="Welcome Back"
        discription="Welcome back! Please enter your details."
      >
        <div className="form_container mt-4" style={{ flexDirection: 'column' }}>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email "
              type="email"
              placeholder="Enter  your email address"
              required={true}
              {...register('email', { required: true })}
            />
            <PasswordField
              label="Password"
              required={true}
              placeholder="Enter your password"
              {...register('password', { required: true })}
            />

            <div className="flex justify-between items-center">
              {/* <Checkbox label = ""  /> */}
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me for 30days"
                className="text-kblackCom text-sm font-normal "
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
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;

const styles = {
  google: {
    display: "flex",
    aliginItems: "center",
    justifyContent: "center",
    borderColor: "#757575",
    borderWidth: 1
  },
}