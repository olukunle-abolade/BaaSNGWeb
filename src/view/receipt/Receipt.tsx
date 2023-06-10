import Image from 'next/image';

// ** MUI
import { Divider } from '@mui/material'

// ** Image
import Logo from '@/assets/logo.png';
import Reciept from "@/assets/images/receipt.png"

// ** Components
import CustomButton from '@/components/user/CustomButton';


const Receipt = () => {
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
          <p className='text-kprimary text-3xl font-bold'>₦ 5,000.00</p>
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
              <p className='text-n400 text-[16px] text-right font-bold'>DAVID OGUNMODEDE</p>
              <p className='text-n100 text-sm text-right font-normal'>WEMA BANK PLC | 123 456 7890</p>
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
              <p className='text-n400 text-[16px] text-right font-bold'>OPEOLUWA OGUNMODEDE</p>
              <p className='text-n100 text-sm text-right font-normal'>Baas | 512 243 3533</p>
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
            <p className='text-n400 text-sm font-semibold'>One-Off</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n400 text-sm font-normal'>What’s it for?</p>
            {/* desc */}
            <p className='text-n400 text-sm font-semibold'>Pocket Money</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n400 text-sm font-normal'>Transaction ID</p>
            {/* desc */}
            <p className='text-n400 text-sm font-semibold'>817ghjfff87f99</p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between">
            {/* name */}
            <p className='text-n400 text-sm font-normal'>Session ID</p>
            {/* desc */}
            <p className='text-n400 text-sm font-semibold'>132425342324155</p>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="w-full flex justify-center  mt-4">
        <CustomButton title='Complete' buttonStyle={{backgroundColor: "#E9E6F4", width: 144}} titleColor="#4730A3" />
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