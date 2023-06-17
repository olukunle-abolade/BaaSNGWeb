import React, { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth';

// Image
import Scan from "@/assets/scan.png"
// ** Components
import SidebarAddUser from '@/components/user/AddUserDrawer'
import CustomButton from '@/components/user/CustomButton'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchAsyncProfile } from '@/store/app/profile';
import { UserData } from '../profile/Profile';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '@/hooks/useTypedSelector';
import { MyData, fetchAsyncDashboardInfo, getDashboardInfoData } from '@/store/app/dashboard';

export interface ISideAdd {
  addUserOpen: boolean
  toggleAddUserDrawer: () => void
}

const defaultValues: UserData = {
  businessname: '',
  businessregnumber: '',
  businessphonenumber: '',
  businessemail: '',
  website: '',
  businessaddress: '',
  businesstype: '',
  businessindustry: '',
  sourceoffund: '',
  purposeofaccount: ""
}

const QR: FC<ISideAdd> = ({addUserOpen, toggleAddUserDrawer}) => {
  const [data, setData] = useState<UserData[]>([])
  const [userData, setUserData] = useState<MyData[]>([])

// ** Context
const auth = useAuth()

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  const getDashboardInfo = useAppSelector(getDashboardInfoData)
  console.log(getDashboardInfo)

// ** Email Address
const email = auth.user?.email
const userId = auth.user?.id

useEffect(() => {
  const profileInfo = {
    url: `/records/profile/?filter=userid,eq,${userId}`,
  }
  dispatch(fetchAsyncProfile(profileInfo))
    .unwrap()
    .then(originalPromiseResult => {
      // console.log(originalPromiseResult.status)
      // originalPromiseResult.status === 200 &&

      setData(originalPromiseResult.records)
    })
    .catch(rejectedValueorSerializedError => {
      console.log(rejectedValueorSerializedError.message)
      {
        rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
const url = `/records/userprofile/${userId}`

useEffect(() => {

  dispatch(fetchAsyncDashboardInfo({url}))
    .unwrap()
    .then(originalPromiseResult => {
      console.log(originalPromiseResult)
      // setUserData(originalPromiseResult)
      setUserData(prevState => [...prevState, originalPromiseResult]);
    })
}, [dispatch, url])
  return (
    <div>
       <SidebarAddUser title='QR Payment' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <div className='w-full h-[365px] bg-[#F5F5F5] flex items-center justify-center'>
          <Image src={Scan} width={300} height={300} alt='' />
        </div>

        <div className='w-full px-4 py-5 rounded-[20px] space-y-2 bg-[#F5F5F5] my-4'>
          <p className='text-n400 text-sm font-normal'>Organization: <span className='text-black text-[20px] font-medium'>{data[0]?.businessname}</span> </p>
          <p className='text-n400 text-sm font-normal'>Logged In as: <span className='text-black text-sm font-medium'>{userData[0]?.firstname}</span> </p>
        </div>

        <CustomButton title='Download' />
      </SidebarAddUser>
    </div>
  )
}

export default QR