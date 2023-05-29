"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';

// ** Third Party
import { FaCheck } from 'react-icons/fa';

// ** Component
import CustomButton from '@/components/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'


const AuthVerify = () => {
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Email verified'
      desc='Your email has been successfully verified. Click below to log in magically.'
      iconComponent={<FaCheck color='white' size={22}/>}
    >
      <div>
        <CustomButton title='Go to Dashboard' onClick={() =>router.push('/dashboard')}/>
      </div>
    </AuthFlowLayout>
  )
}

export default AuthVerify


