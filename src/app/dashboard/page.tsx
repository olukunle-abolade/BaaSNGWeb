"use client"
import React from 'react'

// ** MUI
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

const RightDasboard= () => {
  return (
      <>
        <h3 className='text-black text-2xl font-normal mb-6'>Good Morning, <span className='font-semibold'>Opeoluwa!</span></h3>
        <Box>
          <div className="grid grid-cols-4 gap-4">
            <div className='bg-kpsec shadow-kpshadow h-[182.55px] rounded-[10px]'></div>
            <div className='bg-kgsec shadow-kpshadow h-[182.55px] rounded-[10px]'></div>
            <div className='bg-krsec shadow-kpshadow h-[182.55px] rounded-[10px]'></div>
            <div className='bg-kysec shadow-kpshadow h-[182.55px] rounded-[10px]'></div>
          </div>
        </Box>
        <Box height={247}> 
          <div className="grid grid-rows-4 grid-flow-col gap-4 h-full my-6">
            <div className="row-span-2 col-span-1 bg-kpsec shadow-kpshadow rounded-[10px]"></div>
            <div className="row-span-2 col-span-1 bg-kpsec shadow-kpshadow rounded-[10px]"></div>
            <div className="row-span-4 col-span-2 bg-white shadow-kpshadow rounded-[10px]"></div>
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