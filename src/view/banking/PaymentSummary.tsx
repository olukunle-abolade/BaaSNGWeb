import Image from 'next/image';
import Link from 'next/link';

//** Image 
import FolderIcon from '@/assets/icons/folder.png'

//** Components
import CustomButton from '@/components/CustomButton';

// ** Third Party
import {FiArrowLeft} from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io';


const PaymentSummary = () => {
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
            <h3 className="text-black text-lg font-semibold">123 456 7890</h3>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Bank</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">WELLS FARGO</h3>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Name</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">DAVID OGUNMODEDE</h3>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n800 text-lg font-medium'>Amount</p>
            {/* desc */}
            <h3 className="text-black text-lg font-semibold">₦5,000.00</h3>
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
            <h3 className="text-black text-lg font-semibold">One time</h3>
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
              <h2 className='text-kprimary text-2xl font-semibold'>₦ 1,340,040.00 </h2>
            </div>
          </div>

          {/* icon */}
          <IoIosArrowForward className='text-gray900' size={20} />
        </div>

        <div className="flex justify-center mt-10">
          <CustomButton title='Pay ₦5,000.00' buttonStyle={{width: 320}} />
        </div>
    </div>
  )
}

export default PaymentSummary