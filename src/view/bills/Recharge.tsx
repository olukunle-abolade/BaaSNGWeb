'use client'
import { useState } from "react"

// ** Component
import SidebarAddUser from '@/components/user/AddUserDrawer';
import Network from "./Network";

const utils = [
  {
    id: 1,
    name: 'Airtime'
  },
  {
    id: 2,
    name: 'Data Bundle'
  }
]

const Recharge = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <div>
      {/*  */}
      <div className="flex space-x-5">
        {
          utils.map((util, index) => {
            return (
              <div className="flex items-center pl-3 space-x-2 w-[200px] h-[70px] border border-n40 rounded-[20px]" key={index}  onClick={toggleAddUserDrawer}>
                {/*  */}
                <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-kysec'></div>
                <h2 className="text-[14px] text-black font-medium">{util.name}</h2>
              </div>
            )
          })
        }
      </div>

      <SidebarAddUser title='Top Up Airtime' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <Network />
      </SidebarAddUser>
    </div>
  )
}

export default Recharge