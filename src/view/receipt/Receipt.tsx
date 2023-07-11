import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

// ** MUI
import { Divider } from '@mui/material'

// ** Image
import Logo from '@/assets/logo.png';
import Reciept from "@/assets/images/receipt.png"

// ** Components
import CustomButton from '@/components/user/CustomButton';

// ** Help
import { NumberFormat } from '@/helpers/convert';

// ** Slice
import { RootState } from '@/store'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { useAppSelector } from '@/hooks/useTypedSelector'
import { getDashboardInfoData } from '@/store/app/dashboard';
import { clearInterBankName } from '@/store/app/intrabank'


interface IReceiptProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setPaymentSummaryOpen: Dispatch<SetStateAction<boolean>>
  setIntraBankOpen: Dispatch<SetStateAction<boolean>>
  setOtpVerifyOpen: Dispatch<SetStateAction<boolean>>
  setSuccessOpen: Dispatch<SetStateAction<boolean>>
  setReceipt: Dispatch<SetStateAction<boolean>>
}

const Receipt: FC<IReceiptProps> = ({setIntraBankOpen, setPaymentSummaryOpen, setModalOpen,  setOtpVerifyOpen, setSuccessOpen, setReceipt}) => {

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getTransactionDetails = useAppSelector((state: RootState) => state.transaction.formData)
  const getDashboardInfo = useAppSelector(getDashboardInfoData)

  const handleCloseAll = () => {
    setModalOpen(false)
    setPaymentSummaryOpen(false)
    setIntraBankOpen(false)
    setOtpVerifyOpen(false)
    setSuccessOpen(false)
    setReceipt(false)

    dispatch(clearInterBankName());
  }

  return (
    <div className="">
      <div className='p-5 h-[620px] w-full mx-auto '>
        <div className="absolute z-10">
          <Image 
            src={Reciept}
            alt=''
            fill
          />
        </div>
       
        {/* logo */}
        <div className=" space-x-4 ">
          <Image
            src={Logo}
            alt=""
            height={100}
            width={100}
          />
        </div>

        <div className=" flex  flex-col  items-center my-6">
          {/* price */}
          <p className='text-kprimary text-3xl font-bold'>₦ {NumberFormat(parseFloat(getTransactionDetails?.amount ?? ""))}</p>
          <h3 className='text-n400 text-[16px] font-medium my-2 '>Successful transaction</h3>
          <h3 className='text-n400 text-sm font-normal'>05:01, Mar 04, 2023</h3>
        </div>

        <Divider  sx={{borderStyle:'dashed'}} />
        {/* table */}
        <div className="w-full my-5  space-y-5">
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-sm font-normal'>Recipient:</p>
            {/* desc */}
            <div className="">
              <p className='text-n400 text-[16px] text-right font-bold uppercase'>{getTransactionDetails?.destinationaccountname}</p>
              <p className='text-n100 text-sm text-right font-normal '>{ getTransactionDetails?.destinationbankname ? getTransactionDetails?.destinationbankname : "BaaS"} | {getTransactionDetails?.destinationaccountnumber && getTransactionDetails?.destinationaccountnumber }</p>
            </div>
          </div>
        </div>
        <Divider  sx={{borderStyle:'dashed'}} />
        {/* table */}
        <div className="w-full my-5 space-y-5">
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-sm font-normal'>Sender:</p>
            {/* desc */}
            <div className="">
              <p className='text-n400 text-[16px] text-right font-bold'>{getDashboardInfo?.firstname}</p>
              <p className='text-n100 text-sm text-right font-normal'>{getTransactionDetails?.senderbankname && getTransactionDetails?.senderbankname } | {getTransactionDetails?.senderaccount && getTransactionDetails?.senderaccount }</p>
            </div>
          </div>
        </div>
        <Divider  sx={{borderStyle:'dashed'}} />

        <p className='text-n400 text-[16px] text-center font-medium mt-7'>Transaction Info:</p>
        {/* table */}
        <div className="w-full mt-7 space-y-5">
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n400 text-sm font-normal'>Transfer type</p>
            {/* desc */}
            <p className='text-n400 text-sm font-semibold'>{getTransactionDetails?.transferType}</p>
          </div>
          {/*  */}
          {
            getTransactionDetails?.narration != null ? (
              <div className="flex items-center justify-between">
                {/* name */}
                <p className='text-n400 text-sm font-normal'>What’s it for?</p>
                {/* desc */}
                <p className='text-n400 text-sm font-semibold capitalize'>{getTransactionDetails?.narration}</p>
              </div>
            ) : null
          }
         
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n400 text-sm font-normal'>Transaction ID</p>
            {/* desc */}
            <p className='text-n400 text-sm font-semibold'>...</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n400 text-sm font-normal'>Session ID</p>
            {/* desc */}
            <p className='text-n400 text-sm font-semibold'>...</p>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="w-full flex justify-center  mt-4">
        <CustomButton title='Complete' onClick={handleCloseAll} buttonStyle={{backgroundColor: "#E9E6F4", width: 144}} titleColor="#4730A3" />
      </div>
    </div>
  )
}

export default Receipt

const styles = {
  landingimage: {
    zIndex: "0"
  }
}