import { useState } from 'react'

// ** Third Party
import OtpInput from 'react-otp-input';
import {FiEyeOff} from 'react-icons/fi'

// ** Components
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import OtpVerification from './OtpVerification';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const [otpVerifyOpen, setOtpVerifyOpen] = useState<boolean>(false)
  const toggleOtpVerifyDrawer = () => setOtpVerifyOpen(!otpVerifyOpen)

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-n800 text-lg font-semibold mb-8'>Enter your transaction pin</h3>

      {/* price */}
      <p className='text-black text-3xl font-semibold'>₦200.00</p>

      <div className=" relative my-10">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className='invisible'>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle ={{height: 80, width: 80, borderWidth: 1, borderColor: '#210590', borderRadius: 8}}
        />

        <div className=' absolute -right-5 bottom-5'>
          <FiEyeOff />
        </div>
      </div>

      <p className='text-kprimary text-sm font-normal mb-14'>Forgot PIN?</p>

      {/* button */}
      <CustomButton title='Confirm' onClick={toggleOtpVerifyDrawer} />

      <SidebarAddUser title='OTP verification' open={otpVerifyOpen} toggle={toggleOtpVerifyDrawer} >
        <OtpVerification/>
      </SidebarAddUser>
    </div>
  )
}

export default OTP