'use client'

import { useState } from 'react';
import Image from 'next/image';

// ** MUI
import Box from '@mui/material/Box';

// ** Image
import IntraImage from '@/assets/images/intrabank.png'

// ** Component
import SidebarAddUser from '@/components/user/AddUserDrawer';
import IntraBank from '../banking/IntraBank';
import InterBank from '../banking/InterBank';

const Fund = () => {
  const [intraBankOpen, setIntraBankOpen] = useState<boolean>(false)
  const [interBankOpen, setInterBankOpen] = useState<boolean>(false)

  const toggleIntraBankDrawer = () => {
    setIntraBankOpen(!intraBankOpen)
  }
  const toggleInterBankDrawer = () => setInterBankOpen(!interBankOpen)

  return (
    <Box>
      <div className="grid grid-cols-3 gap-4 w-[966px] mt-10" >
        <div onClick={toggleIntraBankDrawer} className='flex flex-col items-center justify-center bg-p50 h-[182.55px] rounded-[10px]'>
          {/* circle  */}
          <div className='flex items-center justify-center w-[75px] h-[75px] rounded-full bg-white'>
            <Image 
              src={IntraImage}
              alt= ""
              style={{height: "auto", width: "auto"}}
            />
          </div>
          <div className="text-center mt-2">
            <h3 className='text-black text-[20px] font-bold '>Intrabank Transfer</h3>
            <p className='text-n100 text-sm font-normal '>Send money to people using Baas</p>
          </div>
        </div>
        <div onClick={toggleInterBankDrawer} className='flex flex-col items-center justify-center bg-p50 h-[182.55px] rounded-[10px]'>
          {/* circle  */}
          <div className='flex items-center justify-center w-[75px] h-[75px] rounded-full bg-white'>
            <Image 
              src={IntraImage}
              alt= ""
              style={{height: "auto", width: "auto"}}
            />
          </div>
          <div className="text-center mt-2">
            <h3 className='text-black text-[20px] font-bold '>Interbank Transfer</h3>
            <p className='text-n100 text-sm font-normal '>Send money to other banks</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-p50 h-[182.55px] rounded-[10px]'>
          {/* circle  */}
          <div className='flex items-center justify-center w-[75px] h-[75px] rounded-full bg-white'>
            <Image 
              src={IntraImage}
              alt= ""
              style={{height: "auto", width: "auto"}}
            />
          </div>
          <div className="text-center mt-2">
            <h3 className='text-black text-[20px] font-bold '>International Transfer</h3>
            <p className='text-n100 text-sm font-normal '>Send money outside Nigeria</p>
          </div>
        </div>
      </div>

      {/* Render SidebarAddUser for Intrabank Transfer */}
      {intraBankOpen && (
        <SidebarAddUser header closeButton title='Funds Transfer' open={intraBankOpen} toggle={toggleIntraBankDrawer} clearName={true}>
          <IntraBank setIntraBankOpen = {setIntraBankOpen} />
        </SidebarAddUser>
      )}

       {/* Render SidebarAddUser for Interbank Transfer */}
       {interBankOpen && (
        <SidebarAddUser title='Funds Transfer' header open={interBankOpen} toggle={toggleInterBankDrawer} clearName={true} closeButton closeNested={true}>
          <InterBank setIntraBankOpen = {setIntraBankOpen} />
        </SidebarAddUser>
      )}
     
    </Box>
  )
}

export default Fund