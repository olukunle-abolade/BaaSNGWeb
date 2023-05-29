"use client"

import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// ** Third Party
import { FaRegEnvelope } from 'react-icons/fa';
import OtpInput from 'react-otp-input';

// ** Component
import CustomButton from '@/components/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'


const OTP = () => {
  // ** State
  const [otp, setOtp] = useState('');

  // ** Hooks
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Check your email'
      desc='We sent a password reset link to oopeoluwa@gmail.com'
      iconComponent={<FaRegEnvelope color='white' size={22}/>}
      backToLogin
    >
      <div>
        <div className=" relative my-10">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className='invisible'>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle ={{height: 80, width: 80, borderWidth: 1, borderColor: '#210590', borderRadius: 8}}
          />
        </div>
        <CustomButton title='Verify Email' onClick={() =>router.push('/auth/set-password')}/>
      </div>
      <div className='flex flex-row space-x-1 items-center justify-center mt-10'>
        {/* text */}
        <h3 className='text-n100 text-sm font-normal'>Didn’t receive the email?</h3>
        {/* link */}
        <Link href={"/"} className='text-kprimary text-sm font-semibold '>Click to resend</Link>
      </div>
    </AuthFlowLayout>
  )
}

export default OTP


