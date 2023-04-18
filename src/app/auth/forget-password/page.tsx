"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import { TextField } from '@/components/FormComponent';
import CustomButton from '@/components/CustomButton';

const ForgetPassword = () => {
  const router = useRouter();

  return (
    <div>
      <AuthFlowLayout
        title='Forgot password?'
        desc='No worries, we’ll send you reset instructions.'
      >
        <div>
          <TextField label='Email' placeholder="Enter your email address"  type="email"/>
          <CustomButton title='Reset Password' onClick={() => router.push('/auth/auth-verify')}/>
        </div>
      </AuthFlowLayout>

    </div>
  )
}

export default ForgetPassword