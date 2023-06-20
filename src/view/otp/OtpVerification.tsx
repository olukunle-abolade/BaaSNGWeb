import { useState } from 'react'
import Link from 'next/link';

// ** Third Party
import OtpInput from 'react-otp-input';
import { FaRegEnvelope } from 'react-icons/fa';

// ** Layout
import { AuthFlowLayout } from '@/layouts/AuthLayout';

// ** Components
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import Success from '../success/Success';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [success, setSuccessOpen] = useState<boolean>(false)
  const toggleSuccessDrawer = () => setSuccessOpen(!success)

  // ** Context
  const auth = useAuth()

  // ** Email Address
  const email = auth.user?.email

  // ** Hooks
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // auth.signinOtp({ otp, email })
  }

  return (
    <div className='flex flex-col items-center'>
      <AuthFlowLayout
        title='Check your email'
        desc={`We sent an OTP code to ${email}`}
        iconComponent={<FaRegEnvelope color='white' size={22}/>}
        backToLogin
      >
        <div>
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
            <CustomButton title="Proceed" onClick={toggleSuccessDrawer}  />
          </div>
        </div>
      
      <div className='flex flex-row space-x-1 items-center justify-center mt-10'>
        {/* text */}
        <h3 className='text-n100 text-sm font-normal'>Didn’t receive the email?</h3>
        {/* link */}
        <Link href={"/"} className='text-kprimary text-sm font-semibold '>Click to resend</Link>
      </div>
    </AuthFlowLayout>

    <SidebarAddUser title='' open={success} toggle={toggleSuccessDrawer} >
      <Success />
    </SidebarAddUser>
    </div>
  )
}

export default OtpVerification