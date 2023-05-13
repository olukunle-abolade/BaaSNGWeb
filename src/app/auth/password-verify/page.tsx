"use client"

// ** Third Party
import { FaCheck } from 'react-icons/fa'

// ** Components
import CustomButton from '@/components/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'
import { useRouter } from 'next/navigation';


const PasswordVerify = () => {
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Password reset'
      desc='Your password has been successfully reset. Click below to log in magically.'
      iconComponent={<FaCheck color='#FFFFFF' />}
    >
      <div>
        <CustomButton title='Continue' onClick={() =>router.push('/')}/>
      </div>
    </AuthFlowLayout>
  )
}

export default PasswordVerify


