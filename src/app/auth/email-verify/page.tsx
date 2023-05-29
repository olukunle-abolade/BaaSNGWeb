"use client"

import { useRouter } from 'next/navigation';

// ** Third Party
import { FaRegEnvelope } from 'react-icons/fa';

// ** Component
import CustomButton from '@/components/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'


const EmailVerify = () => {
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Check your email'
      desc='We sent a password reset link to oopeoluwa@gmail.com'
      iconComponent={<FaRegEnvelope color='white' size={22}/>}
      backToLogin
    >
      <div>
        <CustomButton title='Enter OTP' onClick={() =>router.push('/auth/set-password')}/>
      </div>
    </AuthFlowLayout>
  )
}

export default EmailVerify


