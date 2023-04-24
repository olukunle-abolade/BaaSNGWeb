"use client"

import React from 'react'
import { TopNavNotificationItem, TopNavWrapper} from './style-topnav'
import {IoSearch} from "react-icons/io5"
import Link from 'next/link'
import { IoMdNotificationsOutline } from 'react-icons/io'
import {ImNotification} from "react-icons/im"
import { notification } from '@/utils/ui-data'
import Dropdown from '../dropdown/dropdown'

import { usePathname, useSearchParams } from 'next/navigation';

const renderNotification = (item: any, index: any) => (
  <TopNavNotificationItem key = {index}>
    <ImNotification className= "mr-2"/>
    <span className = "text-base">{item.note}</span>
  </TopNavNotificationItem>
)


const Topnav = () => {
  const pathname = usePathname();

  let name = "";
  if(pathname === "/dashboard"){
    name = "DASHBOARD"
  }else if(pathname === "/dashboard/transactions"){
    name = "TRANSACTIONS"
  }else if(pathname === "/dashboard/rolenpri"){
    name = "ADMINISTRATION"
  }

  return (
    <>
      <TopNavWrapper>
        {/* Left hand side top nav */}
        <div className = "left_Topnav">
          <h3 className='text-sm text-[#2D2D2D] font-semibold'>{name}</h3>
        </div>

        {/* Right Hand side nav */}
        <div className = "flex items-center space-x-5">
          {/* setting */}
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white">
            <IoSearch className='text-n100 hover:scale-150' size={20}/>
          </div>
          {/* notification */}
          <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-white">
            <Dropdown
              icon = {<IoMdNotificationsOutline/>}
              badge
              contentData = {notification}
              renderData = {(item: any, index: any) => renderNotification(item, index)}
              renderFooter = {() => <Link href= "#"> View All </Link>}
            />
          </div>
          
        </div>
      </TopNavWrapper>
    </>
  )
}

export default Topnav;
