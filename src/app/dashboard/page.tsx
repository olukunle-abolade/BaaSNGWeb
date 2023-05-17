"use client"

import React from 'react'
import Image from 'next/image'

// ** MUI
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

//** Third Party
import {BiHide} from 'react-icons/bi'
import {FiArrowDown, FiArrowUp, FiMoreHorizontal, FiUsers} from 'react-icons/fi'
import {HiOutlineCreditCard} from 'react-icons/hi'
import { IoMdAddCircleOutline } from 'react-icons/io'

//** Image 
import FolderIcon from '@/assets/icons/folder.png'
import DownChartIcon from "@/assets/icons/down-cart.png"
import UpChartIcon from "@/assets/icons/up-cart.png"
import PendIcon from "@/assets/icons/pend.png"
import Cyclic from "@/assets/icons/cyclic.svg"
import Verve from '@/assets/icons/verve.svg'

// ** Component
import ApexAreaChart from '@/view/charts/apex-charts/ApexAreaChart'
import CustomButton from '@/components/CustomButton'
import { TextField } from '@/components/FormComponent'

const RightDasboard= () => {
  return (
      <>
        <h3 className='text-black text-2xl font-normal mb-6'>Good Morning, <span className='font-semibold'>Opeoluwa!</span></h3>
        <Box>
          <div className="grid grid-cols-4 gap-4">
            <div className='py-6 px-3 space-y-2 bg-kpsec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-kpsec flex items-center justify-center">
                <Image src={FolderIcon} alt='' width={25} height={25} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kprimary text-lg font-bold'>₦1,340,040.00</p>
                <BiHide className='text-n100 text-lg'/>
              </div>
              <p className='text-n100 text-sm font-normal'>Account Balance</p>
            </div>
            <div className='py-6 px-3 space-y-2 bg-kgsec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-kgsec flex items-center justify-center">
                <Image src={DownChartIcon} alt='' width={20} height={20} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kgreen text-lg font-bold'>₦2,140,032.00</p>
              </div>
              <p className='text-n100 text-sm font-normal'>Amount Funded</p>
            </div>
            <div className='py-6 px-3 space-y-2 bg-krsec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-krsec flex items-center justify-center">
                <Image src={UpChartIcon} alt='' width={20} height={20} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kred text-lg font-bold'>₦3,450.00</p>
              </div>
              <p className='text-n100 text-sm font-normal'>Total Expenses</p>
            </div>
            <div className='py-6 px-3 space-y-2 bg-kysec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-kysec flex items-center justify-center">
                <Image src={PendIcon} alt='' width={20} height={20} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kyellow text-lg font-bold'>₦1,607.00</p>
              </div>
              <p className='text-n100 text-sm font-normal'>Pending Transaction</p>
            </div>
          </div>
        </Box>
        <Box height={247}> 
          <div className="grid grid-rows-4 grid-flow-col gap-4 h-full my-6">
            <div className="flex items-center p-6 row-span-2 col-span-1 bg-kpsec shadow-kpshadow rounded-[10px]">
              {/*  */}
              <div className="w-[62.55px] h-[62.55px] rounded-full bg-kpsec flex items-center justify-center">
                <HiOutlineCreditCard size={28} className="text-kprimary"/>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                {/*  */}
                <h2 className='text-kprimary text-lg font-bold'>33</h2>
                {/*  */}
                <p className='text-n100 text-sm font-normal'>Total Transactions</p>
              </div>
            </div>
            <div className="flex items-center p-6 row-span-2 col-span-1 bg-kpsec shadow-kpshadow rounded-[10px]">
              {/*  */}
              <div className="w-[62.55px] h-[62.55px] rounded-full bg-kpsec flex items-center justify-center">
                <FiUsers size={28} className="text-kprimary"/>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                {/*  */}
                <h2 className='text-kprimary text-lg font-bold'>33</h2>
                {/*  */}
                <p className='text-n100 text-sm font-normal'>Total Transactions</p>
                </div>
            </div>
            <div className="row-span-4 col-span-2 bg-white shadow-kpshadow rounded-[10px] h-[247px]">
              <ApexAreaChart />
            </div>
          </div>
        </Box>
        <Grid item xs={12} mt={10}>
          <h1 className='text-black'>Table Components</h1>
        </Grid>
      </>
  )
}

const LeftDashAppointment = () => {
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
        <div className="flex flex-col items-center space-y-3">
          <div className="h-12 w-12 rounded-lg bg-white border border-n50 shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] flex items-center justify-center">
            <FiArrowUp className='text-n400' />
          </div>  
          <p className='text-n100 text-sm font-normal'>Transfer</p>
        </div>

        {/*  */}
        <div className="flex flex-col items-center space-y-3">
          <div className="h-12 w-12 rounded-lg bg-white border border-n50 shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] flex items-center justify-center">
            <FiArrowDown className='text-n400'/>
          </div>
          <p className='text-n100 text-sm font-normal'>Request</p>
        </div>

        {/*  */}
        <div className="flex flex-col items-center space-y-3">
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
          <TextField type="textarea" placeholder="Add notes..." />
          <CustomButton title='Send Money' />
        </form>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='flex'>
      <div style={{
        width: "69%",
        height: 900,            
        padding: 25
      }} 
      className = ""

      >
        <RightDasboard />
      </div>
      <div style={{
        width: "326px",
        height: 900,            
        background: "#FFFFFF",
      }} 
      className = "rounded-[10px]" >
        <LeftDashAppointment/>
      </div>
    </div>
  )
}


const DashboardWrapper = () => {
  return (
    <>
      <Dashboard />
    </>
  )
}

export default DashboardWrapper