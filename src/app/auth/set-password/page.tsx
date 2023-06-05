"use client"

import { useRouter } from 'next/navigation';

// ** Hooks **
import { useAuth } from '@/hooks/useAuth';

// ** Third Party
import { FaRegEnvelope } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { ThreeDots } from 'react-loading-icons';

// ** Component
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import { PasswordField } from '@/components/FormComponent';
import CustomButton from '@/components/CustomButton';

const SetPassword = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  // ** Context
  const auth = useAuth()

  // ** Email Address
  const email = auth.user?.email


  const onSubmit = async (data: any) => {
    const { password } = data
    console.log(email)
    console.log(password)
    auth.pass({ email: email, password: password})
  };

  return (
    <div>
      <AuthFlowLayout
        title='Set new password'
        desc='Your new password must be different to previously used passwords.'
        iconComponent={<FaRegEnvelope color='white' size={22}/>}
        backToLogin
        
      >
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <PasswordField
              label="Password"
              placeholder="Enter your new password"
              {...register('password', { required: true })}
            />

            <PasswordField
              label="Confirm Password"
              placeholder="Confirm new password"
              {...register('cpassword', { required: true })}
            />

            {auth.loading ? (
                <ThreeDots width={30} className='loading-circle mx-auto' stroke='#210590' fill='#210590' />
              ) : (
                <CustomButton title="Continue" type ="submit"  />
              )}
          </div>
        </form>
      </AuthFlowLayout>

    </div>
  )
}

export default SetPassword