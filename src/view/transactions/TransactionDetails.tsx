import Image from 'next/image'

// ** MUI
import { Divider } from '@mui/material'

// ** Components
import Badge from '@/components/badge/badge'
import CustomButton from '@/components/CustomButton'

// ** Images
import Wema from '@/assets/images/Wema-Bank.svg'
import Customer from '@/assets/images/customer.svg'
import Feedback from '@/assets/images/feedback.svg'
const TransactionDetails = () => {
  return (
    <div className="relative">
      {/* short info */}
      <div className="absolute bottom-0 right-10">
        <CustomButton title='View Receipt' buttonStyle={{backgroundColor: "#E9E6F4", width: 206}} titleColor="#4730A3" />
        <p className='text-n400 text-[16px] font-normal mt-6'>Any Question about this transaction?</p>
        <div className="grid grid-cols-2 gap-4 w-fit"> 
          <CustomButton title='Customer Service' iconImage={Customer} buttonStyle={{backgroundColor: "transparent"}} titleColor="#210590" textStyle={{fontSize: 12, fontWeight: 400, marginLeft: 5}} />
          <CustomButton title='Feedback Now' iconImage={Feedback} buttonStyle={{backgroundColor: "transparent"}} titleColor="#210590" textStyle={{fontSize: 12, fontWeight: 400, marginLeft: 5}} />
        </div>
      </div>
      <div className="relative p-8 h-[700px] w-[449px] border border-n50 rounded-[10px] shadow-[0px 4px 10px rgba(174, 173, 173, 0.03)] mx-auto">
        {/* logo */}
        <div className="absolute top-0 left-2/4 -translate-y-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full ">
          <Image src={Wema} alt = ""  width={72} height={72} className='rounded-full' />
        </div>

        <div className="flex flex-col items-center">
          <h3 className='text-n400 text-lg font-medium mb-2 mt-6'>To David Ogunmodede</h3>
          {/* price */}
          <p className='text-n400 text-3xl font-bold mb-2'>₦ 5,000.00</p>
          <Badge content="Successful" type={"success"} />
        </div>
        {/*  */}

        {/* table */}
        <div className="w-full mt-10 mb-5 space-y-5">
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-sm font-normal'>Transfer Amount</p>
            {/* desc */}
            <p className='text-n100 text-sm font-normal'>₦ 5,000.00</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-sm font-normal'>Fee</p>
            {/* desc */}
            <p className='text-n100 text-sm font-normal'>₦ 00.00</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-sm font-normal'>Payment Amount</p>
            {/* desc */}
            <p className='text-black text-sm font-normal'>₦ 5,000.00</p>
          </div>
        </div>

        <Divider  sx={{borderStyle:'dashed'}} />

        {/* table */}
        <div className="w-full mt-5 space-y-5">
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Recipient Name</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>DAVID OGUNMODEDE</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Recipient  Bank</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>WEMA BANK PLC</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Payment Account number</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>123 456 7890</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Completion Time</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>07:22, Feb 28, 2023</p>
          </div>

          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Transaction ID</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>871g885bdm00</p>
          </div>

          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Session ID</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>132092992827726626666243</p>
          </div>

          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Payment Type</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>Money Transfer</p>
          </div>
            {/*  */}
            <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n100 text-[16px] font-normal'>Payment Method</p>
            {/* desc */}
            <p className='text-black text-sm font-medium'>Balance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetails