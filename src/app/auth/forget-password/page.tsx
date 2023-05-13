"use client"

import { useRouter } from 'next/navigation';

// ** Third Party
import { FiKey } from 'react-icons/fi';

// import { FaRegEnvelope } from 'react-icons/fa';

// ** Components 
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
        backToLogin
        iconComponent = {<FiKey color='white' size={22}/>}
        // iconComponent={<FaRegEnvelope color='white' size={22}/>}
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