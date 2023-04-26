import Image from 'next/image'
import React, { useState } from 'react'

// Third Party
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/bootstrap.css";

// ** Image
import Airtel from '@/assets/images/Airtel.svg'
import MTN from "@/assets/images/MTN.svg"
import Glo from "@/assets/images/GLO.svg"
import Mobile from "@/assets/images/9MOBILE.svg"
import { TextField } from '@/components/FormComponent'
import CustomButton from '@/components/CustomButton'

const Network = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="">
        <div className='mb-8'>
          <p className='text-n800 text-sm font-medium mb-4'>Mobile Number</p>
          <PhoneInput
            country={"ng"}
            enableSearch={true}
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </div>
        <p className='text-n800 text-sm font-medium mb-4'>Select a Network Provider</p>
        <div className='flex items-center space-x-4'>
          {/* AIRTEL */}
          <Image 
            src={Airtel}
            alt=''
            height = {40}
            width={40}
            // style={{height: 'atuo', width: 'auto'}}
          />  
          {/* MTN */}
          <Image 
            src={MTN}
            alt=''
            height = {50}
            width={40}
            // style={{height: 'atuo', width: 'auto'}}
          />  
          {/* GLO */}
          <Image 
            src={Glo}
            alt=''
            height = {40}
            width={40}
          />  
          {/* MOBILE */}
          <Image 
            src={Mobile}
            alt=''
            height = {40}
            width={40}
          />  
        </div>
      </div>

      {/* Price */}
      <div className="grid grid-cols-3  gap-4 my-8">
        <div className='flex items-center justify-center w-[103.21px] h-[81.75px] bg-p50 rounded-[5.35px]'>
          <h1 className='text-black text-[28.61px] font-normal '>
            <span className='text-lg'>₦</span>50
          </h1>
        </div>
        <div className='flex items-center justify-center w-[103.21px] h-[81.75px] bg-p50 rounded-[5.35px]'>
          <h1 className='text-black text-[28.61px] font-normal '>
            <span className='text-lg'>₦</span>100
          </h1>
        </div>
        <div className='flex items-center justify-center w-[103.21px] h-[81.75px] bg-p50 rounded-[5.35px]'>
          <h1 className='text-black text-[28.61px] font-normal '>
            <span className='text-lg'>₦</span>200
          </h1>
        </div>
        <div className='flex items-center justify-center w-[103.21px] h-[81.75px] bg-p50 rounded-[5.35px]'>
          <h1 className='text-black text-[28.61px] font-normal '>
            <span className='text-lg'>₦</span>300
          </h1>
        </div>
        <div className='flex items-center justify-center w-[103.21px] h-[81.75px] bg-p50 rounded-[5.35px]'>
          <h1 className='text-black text-[28.61px] font-normal '>
            <span className='text-lg'>₦</span>500
          </h1>
        </div>
        <div className='flex items-center justify-center w-[103.21px] h-[81.75px] bg-p50 rounded-[5.35px]'>
          <h1 className='text-black text-[28.61px] font-normal '>
            <span className='text-lg'>₦</span>1000
          </h1>
        </div>
      </div>

      {/* amount input */}
      <TextField label='Amount' type="text" placeholder="₦ 10.00 - ₦ 5,000,000.00" />

      {/* button */}
      <CustomButton title='Pay' onClick={()=> null} buttonStyle={{marginTop: 40}} />
    </div>
   
  )
}

export default Network