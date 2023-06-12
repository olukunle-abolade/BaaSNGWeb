import React, { FC } from 'react'

// ** Components
import SidebarAddUser from '@/components/user/AddUserDrawer'

export interface ISideAdd {
  addUserOpen: boolean
  toggleAddUserDrawer: () => void
}


const QR: FC<ISideAdd> = ({addUserOpen, toggleAddUserDrawer}) => {



  return (
    <div>
       <SidebarAddUser title='QR Payment' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <div className='w-[651px] h-[365px] bg-'>

        </div>
      </SidebarAddUser>
    </div>
  )
}

export default QR