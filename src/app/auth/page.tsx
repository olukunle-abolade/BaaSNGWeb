'use client'

import { Checkbox, FormControlLabel } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { PasswordField, TextField } from '@/components/FormComponent';
import AuthLayout from '@/layouts/AuthLayout';
import CustomButton from '@/components/CustomButton';
import { COLORS } from '@/assets/theme/theme';
import Google from "@/assets/google.png"
const Login = () => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <AuthLayout
        title="Welcome Back"
        discription="Welcome back! Please enter your details."
      >
        <div className="form_container mt-4" style={{ flexDirection: 'column' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email "
              // name="email"
              type="email"
              placeholder="Enter  your email address"
              required={true}
              {...register('email', { required: true })}
            />
            <PasswordField
              label="Password"
              // {...name}
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
              <CustomButton title="Sign In"  onClick={()=> {}} />
              <CustomButton iconImage={Google} title="Sign in with Google" titleColor={COLORS.black} textStyle={{marginLeft: 10}} buttonColor="transparent" buttonStyle={styles.google} onClick={()=> {}} />
            </div>

            <div className='flex flex-row space-x-1 items-center justify-center mt-10'>
              {/* text */}
              <h3 className='text-n100 text-sm font-normal'>Don’t have an account?</h3>
              {/* link */}
              <Link href={"/"} className='text-kprimary text-sm font-semibold '>Sign Up</Link>
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