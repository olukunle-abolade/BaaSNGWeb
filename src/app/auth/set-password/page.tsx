"use client"


import { useRouter } from 'next/navigation';

// ** Third Party
import { FaRegEnvelope } from 'react-icons/fa';

// ** Component
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import { PasswordField } from '@/components/FormComponent';
import CustomButton from '@/components/CustomButton';

const SetPassword = () => {
  const router = useRouter();


  return (
    <div>
      <AuthFlowLayout
        title='Set new password'
        desc='Your new password must be different to previously used passwords.'
        iconComponent={<FaRegEnvelope color='white' size={22}/>}
        backToLogin
        
      >
        <div>
          <PasswordField
            label="Password"
            placeholder="Enter your new password"
          />

          <PasswordField
            label="Confirm Password"
            placeholder="Confirm new password"
          />
          <CustomButton title='Reset Password' onClick={() => router.push('/auth/password-verify')}/>
        </div>
      </AuthFlowLayout>

    </div>
  )
}

export default SetPassword