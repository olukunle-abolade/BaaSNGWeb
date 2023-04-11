"use client"

import CustomButton from '@/components/CustomButton'
import { TextField } from '@/components/FormComponent'
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'


const PasswordVerify = () => {
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Password reset'
      desc='Your password has been successfully reset. Click below to log in magically.'
    >
      <div>
        <CustomButton title='Continue' onClick={() =>router.push('/')}/>
      </div>
    </AuthFlowLayout>
  )
}

export default PasswordVerify


