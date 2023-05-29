"use client"

import Link from 'next/link'
import { useState } from 'react';

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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(otp);
  }

  return (
    <AuthFlowLayout
      title='Check your email'
      desc='We sent a password reset link to oopeoluwa@gmail.com'
      iconComponent={<FaRegEnvelope color='white' size={22}/>}
      backToLogin
    >
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <div className="flex justify-center relative my-10">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className='invisible'>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle ={{height: 80, width: 80, borderWidth: 1, borderColor: '#210590', borderRadius: 8}}
            />
          </div>
          <CustomButton title='Verify Email' type="submit"/>
        </div>
      </form>
      
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


