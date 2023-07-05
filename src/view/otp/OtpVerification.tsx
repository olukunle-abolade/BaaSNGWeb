import { useState } from 'react'
import Link from 'next/link';

// ** Third Party
import OtpInput from 'react-otp-input';
import { FaRegEnvelope } from 'react-icons/fa';

// ** Layout
import { AuthFlowLayout } from '@/layouts/AuthLayout';

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { fetchAsyncOtp } from '@/store/app/otp';

// ** Components
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import Success from '../success/Success';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';
import { postAsyncInterBank } from '@/store/app/intrabank';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { toast } from 'react-hot-toast';
import TransactionSuccess from '../success/TrasactionSuccess';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [success, setSuccessOpen] = useState<boolean>(false)
  const [message, setMessage] = useState(false);
  const toggleSuccessDrawer = () => setSuccessOpen(!success)

  const isButtonDisabled = otp.length !== 4; // Check if the OTP length is not equal to 4

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getTransactionDetails = useAppSelector((state: RootState) => state.transaction.formData)

  // ** Context
  const auth = useAuth()
  const userEmail = auth.user?.email

  // ** Hooks
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
      if(data.length > 0) {
        // 
        setMessage(false);
        const formData = {
          url: "/records/accountactivities",
          accountdetailsid: getTransactionDetails?.accountdetailsid,
          transactionref: getTransactionDetails?.transactionref,
          narration: getTransactionDetails?.narration,
          senderaccount: getTransactionDetails?.senderaccount,
          sendername: getTransactionDetails?.sendername,
          senderbankname: getTransactionDetails?.senderbankname ?? "",
          senderbankcode: getTransactionDetails?.senderbankcode,
          destinationaccountnumber: getTransactionDetails?.destinationaccountnumber,
          destinationaccountname: getTransactionDetails?.destinationaccountname ?? "",
          destinationbankcode: getTransactionDetails?.destinationbankcode,
          polarity: getTransactionDetails?.polarity,
          amount: getTransactionDetails?.amount,
          balance: getTransactionDetails?.balance

        }
        dispatch(postAsyncInterBank(formData))
        .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          if(originalPromiseResult.message ){
            toast.error(originalPromiseResult.message)
          }

          if(typeof originalPromiseResult === "number"){
            toast.success("Transaction Successful!")
            toggleSuccessDrawer()
          }
        });
      }else {
        setMessage(true)
      }
    })
  }
  

  return (
    <div className=''>
      <AuthFlowLayout
        title='Check your email'
        desc={`We sent an OTP code to ${userEmail}`}
        iconComponent={<FaRegEnvelope color='white' size={22}/>}
        backToLogin
      >
        <form noValidate onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col justify-center relative my-10 ">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className='invisible'>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle ={{height: 80, width: 80, borderWidth: 1, borderColor: '#210590', borderRadius: 8, color: "#210590", fontWeight: 600}}
              />
              {
                message && 
                <p className='text-kred text-center text-xs font-medium mt-5 '>
                  Incorrect PIN
                </p>
              }
            </div>

            <CustomButton title="Proceed"  type="submit"  disabled={isButtonDisabled}  buttonStyle={ isButtonDisabled && {marginTop: 10, backgroundColor: "#A499D1"}}   />
          </div>
        </form>
      
        <div className='flex flex-row space-x-1 items-center justify-center mt-10'>
          {/* text */}
          <h3 className='text-n100 text-sm font-normal'>Didn’t receive the email?</h3>
          {/* link */}
          <Link href={"/"} className='text-kprimary text-sm font-semibold '>Click to resend</Link>
        </div>
      </AuthFlowLayout>
      
      {
        success ?
        (<SidebarAddUser title='' open={success} toggle={toggleSuccessDrawer} >
          <TransactionSuccess />
        </SidebarAddUser> ) : null
      }
     
    </div>
  )
}

export default OtpVerification

// onClick={toggleSuccessDrawer} 