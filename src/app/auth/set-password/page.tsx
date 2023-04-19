"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import { PasswordField, TextField } from '@/components/FormComponent';
import CustomButton from '@/components/CustomButton';

const SetPassword = () => {
  const router = useRouter();


  return (
    <div>
      <AuthFlowLayout
        title='Set new password'
        desc='Your new password must be different to previously used passwords.'
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