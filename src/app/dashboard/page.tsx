"use client"
import React from 'react'
import Image from 'next/image'

// ** MUI
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

//** Third Party
import {BiHide} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineCreditCard} from 'react-icons/hi'

//** Image 
import FolderIcon from '@/assets/icons/folder.png'
import DownChartIcon from "@/assets/icons/down-cart.png"
import UpChartIcon from "@/assets/icons/up-cart.png"
import PendIcon from "@/assets/icons/pend.png"
import ApexAreaChart from '@/view/charts/apex-charts/ApexAreaChart'

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
    <>
    </>
  )
}

const Dashboard = () => {
  return (
    <div className='flex'>
      <div style={{
        width: "69%",
        height: 900,            
        background: "#f8f8fb",
        padding: 25
      }} 
      className = ""

      >
        <RightDasboard />
      </div>
      <div style={{
        width: "31%",
        height: 900,            
        background: "#EFF0F3",
      }} 
      className = "" >
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