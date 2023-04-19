"use client"
import React from 'react'

// ** MUI
import { Box } from '@mui/material'


const RightDasboard= () => {
  return (
      <>
        <h3 className='text-black text-2xl font-normal mb-6'>Good Morning, <span className='font-semibold'>Opeoluwa!</span></h3>
        <Box>
          <div className="grid grid-cols-4 gap-4">
            <div className='bg-black h-[182.55px]'></div>
            <div className='bg-black h-[182.55px]'></div>
            <div className='bg-black h-[182.55px]'></div>
            <div className='bg-black h-[182.55px]'></div>
          </div>
        </Box>
        <Box height={247}>
          <div className="grid grid-rows-4 grid-flow-col gap-4 h-full my-6">
            <div className="row-span-2 col-span-1 bg-black"></div>
            <div className="row-span-2 col-span-1 bg-black"></div>
            <div className="row-span-4 col-span-2 bg-black"></div>
          </div>
        </Box>
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