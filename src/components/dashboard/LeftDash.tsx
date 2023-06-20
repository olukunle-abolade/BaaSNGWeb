"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

//** Third Party
import {FiArrowDown, FiArrowUp, FiMoreHorizontal, FiUsers} from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'

//** Image 
import Cyclic from "@/assets/icons/cyclic.svg"
import Verve from '@/assets/icons/verve.svg'

// ** Component
import CustomButton from '@/components/user/CustomButton'
import { TextField } from '@/components/FormComponent'
import BeneficiarySelect from '@/components/BeneficiarySelect/BeneficiarySelect'

const beneficiaries = [
  {
    id: '1',
    bankLogo: '/bank1-logo.png',
    bankName: 'Bank 1',
    accountName: 'John Doe',
    accountNumber: '1234567890',
  },
  {
    id: '2',
    bankLogo: '/bank2-logo.png',
    bankName: 'Bank 2',
    accountName: 'Jane Smith',
    accountNumber: '9876543210',
  },
];

interface Beneficiary {
  id: string;
  bankLogo: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
}

const LeftDash = () => {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary[]>([]);

  const router = useRouter();

  const handleBeneficiarySelect = (beneficiary: any) => {
    setSelectedBeneficiary(beneficiary);
  };
  
  return (
    <div className='px-4 py-6'>
      <p className='text-n600 text-lg font-medium'>Payment Methods</p>

      {/* Cards Design */}
      <div className='flex items-center gap-8 my-6'>
        {/* first card */}
        <div className="h-[183.13px] w-[148.42px] rounded-[11.81px] bg-kprimary px-2 py-6">
          <div className="">
            <Image 
              src={Cyclic}
              alt=''
              height={37}
              width={37}
            />
          </div>

          <div className="space-y-3">
            <h3 className='text-white text-[11.57px] text-right'>Debit Card</h3>
            <h3 className='text-white text-[11.57px] text-right'>XXXX XXXX 6453</h3>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="space-y-3">
              <h3 className='text-white text-[9.92px]'>Exp.</h3>
              <h3 className='text-white text-[9.92px]'>08/24</h3>
            </div>

            <Image 
              src={Verve}
              alt=''
              height={37}
              width={37}
            />
          </div>
        </div>

        {/* second card */}
        <div className="h-[137.99px] w-[111.64px] rounded-[11.81px] bg-p400 px-2 py-2">
          <div className="">
            <Image 
              src={Cyclic}
              alt=''
              height={30}
              width={30}
            />
          </div>
          <div className="space-y-3">
            <h3 className='text-white text-[8.42px] text-right'>Debit Card</h3>
            <h3 className='text-white text-[8.42px] text-right'>XXXX XXXX 6453</h3>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="space-y-3">
              <h3 className='text-white text-[8.42px]'>Exp.</h3>
              <h3 className='text-white text-[8.42px]'>08/24</h3>
            </div>

            <Image 
              src={Verve}
              alt=''
              height={30}
              width={30}
            />
          </div>
          </div>
        </div>

      {/* i hv to build this to a component later */}
      <div className="flex items-center justify-between space-x-2 mt-8">
        {/*  */}
        <div className="flex flex-col items-center space-y-3">
          <div className="h-12 w-12 rounded-lg bg-kprimary flex items-center justify-center">
            <IoMdAddCircleOutline />
          </div>
          <p className='text-n100 text-sm font-normal'>Top Up</p>
        </div>

        {/*  */}
        <button onClick={() => router.push("/dashboard/transactions")} className="flex flex-col items-center space-y-3">
          <div className="h-12 w-12 rounded-lg bg-white border border-n50 shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] flex items-center justify-center">
            <FiArrowUp className='text-n400' />
          </div>  
          <p className='text-n100 text-sm font-normal'>Transfer</p>
        </button>

        {/*  */}
        <div className="flex flex-col items-center space-y-3">
          <div className="h-12 w-12 rounded-lg bg-white border border-n50 shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] flex items-center justify-center">
            <FiArrowDown className='text-n400'/>
          </div>
          <p className='text-n100 text-sm font-normal'>Request</p>
        </div>

        {/*  */}
        <div onClick={() => router.push("/dashboard/transactions")} className="flex flex-col items-center space-y-3">
          <div className="h-12 w-12 rounded-lg bg-white border border-n50 shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] flex items-center justify-center">
            <FiMoreHorizontal className='text-n400'/>
          </div>
          <p className='text-n100 text-sm font-normal'>More</p>
        </div>
      </div>

      {/* hr */}
      <div className='w-[105px] h-[2px] bg-n100 mx-auto mt-5' />

      {/* Top Up */}
      <div className="mt-7">
        {/*  */}
        <h2 className='text-n600 text-lg font-medium mb-2'>Quick Transfer</h2>
        <p className='text-n80 text-xs font-normal'>Send To Beneficiaries</p>

        <form>
          <BeneficiarySelect beneficiaries={beneficiaries} onSelectBeneficiary={handleBeneficiarySelect} />
          <TextField type="text" placeholder="Total Amount" />
          <TextField type="textarea" placeholder="Add notes..." />

          {/* {selectedBeneficiary && (
            <div className="flex items-center space-x-1">
              <div className="w-9 h-9 rounded bg-black"></div>
              <div className='flex flex-col space-x-2'>
                <span className='text-black'>{selectedBeneficiary.accountName}</span>
                <span className='text-black'>{selectedBeneficiary.accountNumber}</span>
              </div>
            </div>
          )} */}
          <CustomButton title='Send Money' />
        </form>
      </div>
    </div>
  )
}

export default LeftDash