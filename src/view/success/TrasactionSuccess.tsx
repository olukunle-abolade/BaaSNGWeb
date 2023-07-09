import { Dispatch, FC, SetStateAction, useState } from 'react'

// ** Third Party
import { FaCheck } from 'react-icons/fa'

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import TrasactionModal from '@/components/Modal/Modal';
import { useAppSelector } from '@/hooks/useTypedSelector'

// ** Components
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import { NumberFormat } from '@/helpers/convert';
import Receipt from '../receipt/Receipt';

interface ISuccessProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setPaymentSummaryOpen: Dispatch<SetStateAction<boolean>>
  setIntraBankOpen: Dispatch<SetStateAction<boolean>>
  setOtpVerifyOpen: Dispatch<SetStateAction<boolean>>
  setSuccessOpen: Dispatch<SetStateAction<boolean>>
}


const TransactionSuccess: FC<ISuccessProps> = ({setIntraBankOpen, setPaymentSummaryOpen, setModalOpen,  setOtpVerifyOpen, setSuccessOpen}) => {
  const [reciept, setReceipt] = useState<boolean>(false)
  const toggleReceiptDrawer = () => setReceipt(!reciept)

  // Modal Toggller
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setModalOpen(false)
    setPaymentSummaryOpen(false)
    setIntraBankOpen(false)
    setOtpVerifyOpen(false)
    setSuccessOpen(false)
  }

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getTransactionDetails = useAppSelector((state: RootState) => state.transaction.formData)



  return (
    <div className='flex flex-col items-center w-full'>
      {/* icon logo */}
      <div className='flex items-center justify-center mx-auto mb-5 w-[81px] h-[81px] rounded-full bg-kgreen border-[15px]  border-[rgba(18, 183, 106, 0.1)]'>
        <FaCheck color='#FFFFFF' />
      </div>
      
      <h3 className='text-n800 text-lg font-semibold mb-6'>Enter your transaction pin</h3>

      {/* price */}
      <p className='text-black text-3xl font-semibold'>₦{NumberFormat(parseFloat(getTransactionDetails?.amount ?? ""))}</p>

      {/* table */}
      <div className="w-full mt-14 space-y-8">
         {/*  */}
         <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Recipient</p>
          {/* desc */}
          <div className="">
            <h3 className="text-black text-lg font-semibold">{getTransactionDetails?.destinationaccountname}</h3>
            <p className='text-n100 text-[16px] font-medium text-right'>{ getTransactionDetails?.destinationbankname ? getTransactionDetails?.destinationbankname : "BaaS"} ({getTransactionDetails?.destinationaccountnumber})</p>
          </div>
        </div>
         {/*  */}
         <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Fee</p>
          {/* desc */}
          <h3 className="text-black text-lg font-semibold">₦0.00</h3>
        </div>
         {/*  */}
         <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Payment Method</p>
          {/* desc */}
          <h3 className="text-black text-lg font-semibold">Balance</h3>
        </div>
      </div>

      {/* button */}
      <div className="grid grid-cols-2 gap-4 w-full mt-14">
        <CustomButton title='Complete' onClick={handleOpen} buttonStyle={{backgroundColor: "#E9E6F4"}} titleColor="#4730A3" />
        <CustomButton title='View Receipt' onClick={toggleReceiptDrawer} />
      </div>

      {
        reciept ? (
        <SidebarAddUser title='' open={reciept} toggle={toggleReceiptDrawer} >
          <Receipt setIntraBankOpen={setIntraBankOpen} setPaymentSummaryOpen={setPaymentSummaryOpen} setModalOpen = {setModalOpen} setOtpVerifyOpen = {setOtpVerifyOpen} setSuccessOpen = {setSuccessOpen} setReceipt={setReceipt}/>
        </SidebarAddUser> ) : null
      }
     

      {/* Modal */}
      <TrasactionModal open = {open} btitle1='No' btitle2='Yes' handleModal={() => null} handleClose={handleClose} title='Save last recipients as a beneficiary' subtitle='Do you confirm to this ?'  />
    </div>
  )
}

export default TransactionSuccess