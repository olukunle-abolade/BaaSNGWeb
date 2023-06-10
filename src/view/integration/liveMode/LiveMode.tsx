import React, { FC, useEffect, useState } from 'react'

// ** Third Party 
import { BsPlus } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiAlertTriangle } from 'react-icons/fi'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'

 // ** Hooks 
import { useAuth } from '@/hooks/useAuth';

//** RTQ
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

// ** Components
import CustomButton from '@/components/user/CustomButton'
import { PasswordField, TextField } from '@/components/FormComponent'
import { fetchAsyncTestId, updateAsyncTest } from '@/store/app/test-mode';

export interface UserData {
  id?: number
  callbackurl: string
  webhookaddress: string

}

const defaultValues: UserData = {
  callbackurl: '',
  webhookaddress: '',
}

interface LiveMode {
  toggleAddUserDrawer: () => void
}

const LiveMode: FC<LiveMode> = ({toggleAddUserDrawer}) => {
  // States
  const [data, setData] = useState<UserData[]>([])

  const {  setValue, handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange'
  })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id

  const url = `/records/urls/${data[0]?.id}`

  const onSubmit = (data: UserData) => {
    const formData = {
      url: url,
      userid: userId,
      callbackurl: data.callbackurl,
      webhookaddress: data.webhookaddress,
    }

    dispatch(updateAsyncTest(formData))
    .unwrap()
    .then((originalPromiseResult) => {
      // originalPromiseResult.code === 1012 || 1021 ?
      //   toast.error(originalPromiseResult.message)
      // :
      toast.success("URL Updated Successfully")
      
      const url= `/records/urls/?filter=userid,eq,${userId}`
    
      dispatch(fetchAsyncTestId({url}))
      .unwrap()
      .then(originalPromiseResult => {
        // console.log(originalPromiseResult.status)
        // originalPromiseResult.status === 200 &&

        setData(originalPromiseResult.records)
      })

    }) 
    .catch(rejectedValueorSerializedError => {
      {
        rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

      }
    })
  }


  useEffect(() => {
    const testInfo = {
      url: `/records/urls/?filter=userid,eq,${userId}`
    }
    dispatch(fetchAsyncTestId(testInfo))
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

  console.log(data[0]?.callbackurl)

  useEffect(() => {
    setValue('callbackurl', data[0]?.callbackurl )
    setValue('webhookaddress', data[0]?.webhookaddress)
  }, [data, setValue])

  return (
    <div>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h3 className='text-[#2D2D2D] text-xl font-semibold'>API Configuration</h3>
            <p className='text-[#2D2D2D] text-sm font-normal'>Adjust notification settings </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
            <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
          </div>
        </div>

        {/* Live Mode */}
      <div className="w-1/2">
        <p className='w-fit py-2 px-3 rounded-2xl text-[20px] text-[#2D2D2D] font-semibold bg-kgsec mt-6'>Live Mode</p>

        <PasswordField label='Live Secret Key' placeholder='**************************************************' />

        <TextField label='Live Public Key' type="text" placeholder="pk_live_2e9c809e69e463c1f43215786022b8076be8e17a" />

        <div className="flex items-center space-x-6">
          {/* ip whilelist */}
          <h3 className='text-sm text-n800 font-medium'>IP Whitelist</h3>
          <CustomButton type="button" title='Add IP addresses' onClick={toggleAddUserDrawer} textStyle={{color: "#4730A3"}} buttonColor='#E9E6F4' buttonStyle={{width: 199}} />
        </div>

          <div className="space-y-6 mt-6">
            <div className="">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Live Callback URL</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  h-[44px]">
                  <span className="flex select-none items-center px-3 text-n100 text-[16px] font-normal sm:text-sm border-r border-[#D0D5DD]">http:// </span>
                  <input type="text" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6" placeholder="www.untitledui.com" {...register('callbackurl', { required: true })}/>
                </div>
              </div>
            </div>
            <div className="">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Live Webhook URL</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  h-[44px]">
                  <span className="flex select-none items-center px-3 text-n100 text-[16px] font-normal sm:text-sm border-r border-[#D0D5DD]">http:// </span>
                  <input type="text"  id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6"  {...register('webhookaddress', { required: true })}/>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </form>
    </div>
  )
}

export default LiveMode