"use client"

import CustomButton from '@/components/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'


const AuthVerify = () => {
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Check your email'
      desc='We sent a password reset link to oopeoluwa@gmail.com'
    >
      <div>
        <CustomButton title='Open email app' onClick={() =>router.push('/auth/set-password')}/>
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

export default AuthVerify


