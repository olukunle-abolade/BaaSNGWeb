import Image from 'next/image';
import Link from 'next/link';

//** Image 
import FolderIcon from '@/assets/icons/folder.png'

//** Components
import CustomButton from '@/components/user/CustomButton';
import SidebarAddUser from '@/components/user/AddUserDrawer';

// ** Third Party
import {FiArrowLeft} from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import OTP from '../otp/OTP';

// ** Helpers
import { NumberFormat } from '@/helpers/convert';

//
import { useAppSelector } from '@/hooks/useTypedSelector';
import { RootState } from '@/store';
import { getDashboardInfoData } from '@/store/app/dashboard';


const PaymentSummary = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const toggleModalDrawer = () => setModalOpen(!modalOpen)

  const getTransactionDetails = useAppSelector((state: RootState) => state.transaction.formData)

  const getDashboardInfo = useAppSelector(getDashboardInfoData)

  console.log(getDashboardInfo)

  return (
    <div>
        <div className="flex items-center  text-center mt-8 space-x-2 ">
          <FiArrowLeft color='#666666' size={20}/>
          <Link href={"/"} className='text-n200 text-sm font-semibold text-center'>Back</Link>
        </div>
        {/* table */}
        <div className="w-full mt-8 space-y-6">
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Account Number</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">{getTransactionDetails?.senderaccount}</h3>
          </div>
          {
            getTransactionDetails?.destinationbankname &&
            <div className="flex items-center justify-between">
              {/* name */}
              <p className='text-n800 text-lg font-medium'>Bank</p>
              {/* desc */}
              <h3 className="text-black text-lg font-semibold">{getTransactionDetails?.destinationbankname}</h3>
            </div>
          }
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Name</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">{getTransactionDetails?.destinationaccountname}</h3>
          </div>
          
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Amount</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">₦{getTransactionDetails?.amount}</h3>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Fee</p>
            {/* desc */}
            <h3 className="text-n100 text-lg font-normal">₦0.00</h3>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Transfer Type</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">{getTransactionDetails?.transferType}</h3>
          </div>
        </div>

        {/* payment Method */}
        <h3 className='mt-10 mb-4'>Payment Method</h3>
        <div className="flex items-center justify-between px-4 w-full h-[93px] rounded-[10px] bg-kpsec ">
          <div className="flex space-x-4">
            {/* avatar icon  */}
            <div className="w-[64.55px] h-[64.55px] rounded-full bg-kpsec flex items-center justify-center">
              <Image src={FolderIcon} alt='' width={25} height={25} />
            </div>

            <div className="flex flex-col">
              {/* desc   */}
              <p className='text-n100 text-lg font-normal'>Available Balance</p>
              {/* price */}
              <h2 className='text-kprimary text-2xl font-semibold'>₦ {NumberFormat(getDashboardInfo?.actualbalance)} </h2>
            </div>
          </div>

          {/* icon */}
          <IoIosArrowForward className='text-gray900' size={20} />
        </div>

        <div className="flex justify-center mt-10">
          <CustomButton title={`Pay ₦${NumberFormat(getTransactionDetails?.amount)}`} buttonStyle={{width: 320}}  onClick={toggleModalDrawer} />
        </div>

        <SidebarAddUser title='Transaction PIN' open={modalOpen} toggle={toggleModalDrawer} >
          <OTP />
        </SidebarAddUser>
    </div>
  )
}

export default PaymentSummary