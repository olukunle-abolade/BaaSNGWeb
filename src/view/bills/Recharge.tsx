'use client'

import { useState } from "react"
import Image from "next/image";

// ** Image
import Airtime from '@/assets/images/bill/data.svg'
import Data from '@/assets/images/bill/airtime.svg'

// ** Component
import SidebarAddUser from '@/components/user/AddUserDrawer';
import Network from "./Network";

const utils = [
  {
    id: 1,
    name: 'Airtime',
    color: Data
  },
  {
    id: 2,
    name: 'Data Bundle',
    color: Airtime
  }
]

const Recharge = () => {
  const [addCardOpen, setAddCardOpen] = useState<boolean>(false)
  const toggleAddCardDrawer = () => setAddCardOpen(!addCardOpen)

  return (
    <div>
      {/*  */}
      <div className="flex space-x-5">
        {
          utils?.map((util, index) => {
            return (
              <div className="flex items-center pl-3 space-x-2 w-[200px] h-[70px] border border-n40 rounded-[20px]" key={index}  onClick={toggleAddCardDrawer}>
                <div className={`flex items-center justify-center w-[50px] h-[50px] rounded-full`}>
                  <Image
                    src={util.color}
                    alt=""
                    width={200}
                    height={70}
                  />
                </div>
                <h2 className="text-[14px] text-black font-medium">{util.name}</h2>
              </div>
            )
          })
        }
      </div>

      <SidebarAddUser title='Top Up Airtime' open={addCardOpen} toggle={toggleAddCardDrawer} header closeButton >
        <Network />
      </SidebarAddUser>
    </div>
  )
}

export default Recharge