import { Dispatch, FC, SetStateAction, useState } from 'react'

// ** Third Party
import OtpInput from 'react-otp-input';
import {FiEyeOff} from 'react-icons/fi'
import { toast } from 'react-hot-toast';

//
import { useAppSelector } from '@/hooks/useTypedSelector';
import { RootState } from '@/store';

// ** Helper
import { NumberFormat } from '@/helpers/convert';

// ** Contexts
import { useAuth } from '@/hooks/useAuth';

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { fetchAsyncOtp, getOtpLoading } from '@/store/app/otp';

// ** Constants
import { HTTP_STATUS } from '@/constants';

// ** Components
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import OtpVerification from './OtpVerification';
import Loader from '@/components/Loader';

interface IOtpProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setPaymentSummaryOpen: Dispatch<SetStateAction<boolean>>
  setIntraBankOpen: Dispatch<SetStateAction<boolean>>
}

const OTP: FC<IOtpProps> = ({setIntraBankOpen, setPaymentSummaryOpen, setModalOpen}) => {

  const [otp, setOtp] = useState('');
  const [otpVerifyOpen, setOtpVerifyOpen] = useState<boolean>(false)
  const [message, setMessage] = useState(false);
  const toggleOtpVerifyDrawer = () => {
    setOtpVerifyOpen(!otpVerifyOpen)
    
  }
  const getTransactionDetails = useAppSelector((state: RootState) => state.transaction.formData)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const otpLoading = useAppSelector(getOtpLoading)
  // ** Context
  const auth = useAuth()
  const userEmail = auth.user?.email

  // handle otp submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const url =`/records/validateotp?filter=email,eq,${userEmail}&filter=token,eq,${otp}`
    console.log(url);
    dispatch(fetchAsyncOtp({url}))
    .unwrap()
    .then(originalPromiseResult=> {
      console.log(originalPromiseResult)
      const data = originalPromiseResult?.records
      console.log(data)
      !data.length ? setMessage(true)
         : toggleOtpVerifyDrawer()
    })
  }

  const isButtonDisabled = otp.length !== 4; // Check if the OTP length is not equal to 4

  if (otpLoading === HTTP_STATUS.PENDING) return <Loader text='Please wait...'/>

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-n800 text-lg font-semibold mb-8'>Enter your transaction pin</h3>

      {/* price */}
      <p className='text-black text-3xl font-semibold'>₦{NumberFormat(parseFloat(getTransactionDetails?.amount ?? ""))}</p>
      <form noValidate onSubmit={handleSubmit}>
        <div className=" relative mt-10 ">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className='invisible'>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle ={{height: 80, width: 80, borderWidth: 1, borderColor: '#210590', borderRadius: 8, color: "#210590", fontWeight: 600}}
            />

          <div className=' absolute -right-5 bottom-5'>
            <FiEyeOff />
          </div>
        </div>
        {
          message && 
          <p className='text-kred text-center text-xs font-medium mt-5 mb-10'>
            Incorrect PIN
          </p>
        }
        <p className='text-kprimary text-sm font-normal mb-14 text-center mt-4'>Forgot PIN?</p>

        {/* button */}
        <CustomButton title='Confirm' type="submit"  disabled={isButtonDisabled}  buttonStyle={ isButtonDisabled && {marginTop: 10, backgroundColor: "#A499D1"}}   />
      </form>
      {
        otpVerifyOpen ?
        <SidebarAddUser header title='OTP verification' open={otpVerifyOpen} toggle={toggleOtpVerifyDrawer} >
          <OtpVerification setIntraBankOpen={setIntraBankOpen} setPaymentSummaryOpen={setPaymentSummaryOpen} setModalOpen = {setModalOpen} setOtpVerifyOpen = {setOtpVerifyOpen}/>
        </SidebarAddUser> : null
      }
    </div>
  )
}

export default OTP

// onClick={toggleOtpVerifyDrawer}