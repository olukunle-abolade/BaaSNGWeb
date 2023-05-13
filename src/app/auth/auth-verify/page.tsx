"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';

// ** Third Party
import { FaRegEnvelope } from 'react-icons/fa';

// ** Component
import CustomButton from '@/components/CustomButton'
import { AuthFlowLayout } from '@/layouts/AuthLayout'


const AuthVerify = () => {
  const router = useRouter();

  return (
    <AuthFlowLayout
      title='Check your email'
      desc='We sent a password reset link to oopeoluwa@gmail.com'
      iconComponent={<FaRegEnvelope color='white' size={22}/>}
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


