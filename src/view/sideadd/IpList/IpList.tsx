import React, {useEffect, useState } from 'react'

// ** Third Pary
import { useForm } from 'react-hook-form';
import { Renderable, Toast, ValueFunction, toast } from 'react-hot-toast'

// ** RTQ
import { deleteAsyncIP, fetchAsyncIP, getIpData, postAsyncIP } from '@/store/app/ipwhitelist';

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

// ** Third Party 
import { BsPlus } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiAlertTriangle } from 'react-icons/fi'

// ** Hooks **
import { useAuth } from '@/hooks/useAuth';

// ** Components
import { useAppSelector } from '@/hooks/useTypedSelector';

export interface ISideAdd {
  addUserOpen: boolean
  toggleAddUserDrawer: () => void
}

interface IP {
  ip: string
}

const defaultValues = {
  ip: ''
}

const IpList = ()=> {

  const { handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange',
  });

   // ** Hooks
   const dispatch = useDispatch<AppDispatch>()
   const ipData = useAppSelector(getIpData)

   console.log(ipData)

  // Context
  const auth = useAuth()

  // ** User Id
  const userId = auth.user?.id
  console.log(userId)

  
  const handleDelete = (id: any) => {
    const url = `/records/ipwhitelist/${id}`

    dispatch(deleteAsyncIP({url}))
    .unwrap()
    .then((originalPromiseResult) => {
      toast.success("IP whitelist deleted successfully")
      const url = `/records/ipwhitelist/?filter=userid,eq,${userId}`
      dispatch(fetchAsyncIP({url}))
      .unwrap()
      .then((originalPromiseResult) => {
        // setList(originalPromiseResult.records)
      }) 
      .catch((rejectedValueorSerializedError: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)
  
        }
      })
    }) 
    .catch((rejectedValueorSerializedError: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
      {
        rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

      }
    })
    
  }

  useEffect(() => {
    const url = `/records/ipwhitelist/?filter=userid,eq,${userId}`
    dispatch(fetchAsyncIP({url}))
    .unwrap()
    .then((originalPromiseResult) => {
    }) 
    .catch((rejectedValueorSerializedError: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
      {
        rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


//   <div className='w-9 h-9 flex items-center justify-center rounded-lg bg-p50'>
//   <BsPlus color='#4730A3' size={24}  />
// </div>

  return (
    <div className="flex flex-col mb-6 space-y-3">
    {/* ip whilelist */}
    <h3 className='text-sm text-n800 font-medium'>IP Whitelist</h3>
    {/* IP address && Add Buttin */}
    <div className="flex space-x-3  flex-wrap ">
      {
        ipData && ipData.length > 0 && 
        ipData.map(listItem => {
          return (
            <div className="flex space-x-2 mb-3" key={listItem.id}>
              <div className="w-fit h-9 px-4 flex items-center justify-center  rounded-2xl bg-[#F2F4F7]">
                <p className='text-sm text-[#344054] font-normal '>{listItem.ipaddress}</p>
              </div>
              <button className='w-9 h-9 flex items-center justify-center rounded-lg bg-p50' onClick={() => handleDelete(listItem.id)}>
                <FaRegTrashAlt color='#4730A3' size={16.67} />
              </button>
            </div>
          )
        })
      }
    </div>
    
  </div>
  )
}

export default IpList