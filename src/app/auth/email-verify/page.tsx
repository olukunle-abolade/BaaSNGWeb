"use client"

import { useRouter } from 'next/navigation';

// ** Context
import { useAuth } from '@/hooks/useAuth';

// ** Third Party
import { FaRegEnvelope } from 'react-icons/fa';

// ** Component
import CustomButton from '@/components/user/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'


const EmailVerify = () => {
  const router = useRouter();

  // ** Context
  const auth = useAuth()

  // ** Email Address
  const email = auth.user?.email

  return (
    <AuthFlowLayout
      title='Check your email'
      desc={`We sent a verification link to ${email}`}
      iconComponent={<FaRegEnvelope color='white' size={22}/>}
      backToLogin
    >
      <div>
        <CustomButton title='Enter OTP' onClick={() =>router.push('/auth/otp')}/>
      </div>
    </AuthFlowLayout>
  )
}

export default EmailVerify


