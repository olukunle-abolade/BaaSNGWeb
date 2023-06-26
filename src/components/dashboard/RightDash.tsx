"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

// ** MUI
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

//** Third Party
import {BiHide} from 'react-icons/bi'
import { FiUsers} from 'react-icons/fi'
import {HiOutlineCreditCard} from 'react-icons/hi'

//** Image 
import FolderIcon from '@/assets/icons/folder.png'
import DownChartIcon from "@/assets/icons/down-cart.png"
import UpChartIcon from "@/assets/icons/up-cart.png"
import PendIcon from "@/assets/icons/pend.png"


// ** Component
import ApexAreaChart from '@/view/charts/apex-charts/ApexAreaChart'

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

// ** Dummy
import MOCK_DATA3 from '@/utils/MOCK_DATA3.json'

// ** Helpers
import { NumberFormat } from '@/helpers/convert'

// ** Hooks 
import { useAuth } from '@/hooks/useAuth';
import { MyData, fetchAsyncDashboard, fetchAsyncDashboardInfo, getDashboardInfoData } from '@/store/app/dashboard'
import Greeting from '@/components/Greeting'
import { useAppSelector } from '@/hooks/useTypedSelector'
import RTable from '@/components/react-table/table'
import Badge from '@/components/badge/badge'

const RightDasboard= () => {
  const [userData, setUserData] = useState<MyData[]>([])
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getDashboardInfo = useAppSelector(getDashboardInfoData)
  console.log(getDashboardInfo)

  // ** Context
  const auth = useAuth()

  const userId = auth.user?.id
  const userEmail = auth.user?.email
  const url = `/records/userprofile/${userId}`

  
  
  // ** Status Color
  const claimStatus: any = {
    "deactivated" : "fail",
    "success": "success",
  }


  //** Table Column
  const columns = useMemo(
    () => [
        {
          Header: 'Image',
          accessor: "image",
          Cell: ({ cell:{ value}}:{cell: any}) => <div className='w-9 h-9 flex items-center justify-center rounded-full border border-n40'>
            <Image src={UpChartIcon} alt='' width={20} height={20} />
          </div>
        },
        {
          Header: 'Name',
          accessor: 'name'
        },
        {
          Header: 'Time',
          accessor: "time"
        },
        {
          Header: 'Date',
          accessor: "date"
        },
        {
          Header: 'Amount',
          accessor: "amount",
          Cell: ({ cell:{ value}}:{cell: any}) => <div className='text-kgreen'>{value}</div>
        },
        {
          Header: 'Status',
          accessor: "status",
            Cell: ({ cell:{ value}}:{cell: any}) => <Badge
            type = {claimStatus[value]}
            content = {value}
          />
        }
      ],
    []
  )

  // ** Demo Data
  const data = useMemo(() => MOCK_DATA3, [])


  useEffect(() => {
    dispatch(fetchAsyncDashboardInfo({url}))
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult)
        // setUserData(originalPromiseResult)
        setUserData(prevState => [...prevState, originalPromiseResult]);
      })
  }, [dispatch, url])

  useEffect(() => {
    const url = `/records/users/?join=profile,kyclevel&join=idtype&join=accountdetails,accountactivities&join=carddetails,cardactivities&filter=email,eq,${userEmail}.com&exclude=password,api_key`
    dispatch(fetchAsyncDashboard({url}))
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult)

        // setUserData({...originalPromiseResult})
      })
  }, [dispatch, url, userEmail])

  return (
      <>
        {/* <h3 className='text-black text-2xl font-normal mb-6'>Good Morning, <span className='font-semibold capitalize'>!</span></h3> */}
        <Greeting name= {userData[0]?.firstname}/>
        <Box>
          <div className="grid grid-cols-4 gap-4">
            <div className='py-6 px-3 space-y-2 bg-kpsec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-kpsec flex items-center justify-center">
                <Image src={FolderIcon} alt='' width={25} height={25} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kprimary text-lg font-bold'>₦ {userData[0]?.actualbalance === null ? 0 : NumberFormat(userData[0]?.actualbalance)}</p>
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
                <p className='text-kgreen text-lg font-bold'>₦ {userData[0]?.totalamountfunded === null ? 0 : NumberFormat(userData[0]?.totalamountfunded)}</p>
              </div>
              <p className='text-n100 text-sm font-normal'>Amount Funded</p>
            </div>
            <div className='py-6 px-3 space-y-2 bg-krsec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-krsec flex items-center justify-center">
                <Image src={UpChartIcon} alt='' width={20} height={20} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kred text-lg font-bold'>₦ {userData[0]?.totalexpenses=== null ? 0 : NumberFormat(userData[0]?.totalexpenses)}</p>
              </div>
              <p className='text-n100 text-sm font-normal'>Total Expenses</p>
            </div>
            <div className='py-6 px-3 space-y-2 bg-kysec shadow-kpshadow h-[182.55px] rounded-[10px]'>
              {/*  */}
              <div className="w-[64.55px] h-[64.55px] rounded-full bg-kysec flex items-center justify-center">
                <Image src={PendIcon} alt='' width={20} height={20} />
              </div>
              <div className="flex items-center justify-between">
                <p className='text-kyellow text-lg font-bold'>₦ 0.00</p>
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
                <h2 className='text-kprimary text-lg font-bold'>{userData[0]?.totaltransactions}</h2>
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
                <h2 className='text-kprimary text-lg font-bold'>{userData[0]?.totalusersadded}</h2>
                {/*  */}
                <p className='text-n100 text-sm font-normal'>Total Users added</p>
                </div>
            </div>
            <div className="row-span-4 col-span-2 shadow-kpshadow rounded-[10px] h-[247px]">
              <ApexAreaChart />
            </div>
          </div>
        </Box>
        <Grid item xs={12} mt={3} bgcolor="#FFFFFF" borderRadius= "10px">
          <div className="flex items-center justify-between px-6 py-6">
            <div className='space-y-1'>
              <h2 className='text-lg text-n600  font-medium '>History</h2>
              <p className='text-n50 text-xs font-normal'>Transaction from last 3 days</p>
            </div>
            <p className='text-p200 text-sm font-semibold '>View all</p>
          </div>
          <div className="px-6">
            <RTable containerStyle={{display: "none"}} columnsData={columns} data={data}/>
          </div>
        </Grid>
      </>
  )
}

export default RightDasboard