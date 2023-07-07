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
  terms: boolean
}

const defaultValues = {
  email: 'ab3sure@gmail.com',
}

const Signup = () => {
  const { handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  // ** Hooks
  const auth = useAuth()
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const { email, terms } = data

    if (!terms) {
     
      return;
    }
  
    auth.signup({ email }, () => {
      
    })
  };

  console.log(auth.loading)

  return (
    <div>
      <AuthLayout
        title="Sign Up"
        discription="Welcome! Enter email address to begin."
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

            <div className="flex justify-between items-center">
              {/* <Checkbox label = ""  /> */}
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions"
                className="text-kblackCom text-sm font-normal"
              />
            </div>

            <div className='space-y-4 mt-8'>
                {auth.loading ? (
                    <ThreeDots width={30} className='loading-circle mx-auto' stroke='#210590' fill='#210590' />
                  ) : (
                    <CustomButton title="Continue" type ="submit"  />
                  )}
              <CustomButton iconImage={Google} title="Sign in with Google" titleColor={COLORS.black} textStyle={{marginLeft: 10}} buttonColor="transparent" buttonStyle={styles.google} onClick={()=> {}} />
            </div>

            <div className='flex flex-row space-x-1 items-center justify-center mt-10'>
              {/* text */}
              <h3 className='text-n100 text-sm font-normal'>Don’t have an account?</h3>
              {/* link */}
              <Link href={"/"} className='text-kprimary text-sm font-semibold '>Sign In</Link>
            </div>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Signup;

const styles = {
  google: {
    display: "flex",
    aliginItems: "center",
    justifyContent: "center",
    borderColor: "#757575",
    borderWidth: 1
  },
}