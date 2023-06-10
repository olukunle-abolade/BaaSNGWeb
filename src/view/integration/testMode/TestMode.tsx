import React, { useEffect, useState } from 'react'

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

const TestMode = () => {
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

    console.log(formData)

    dispatch(updateAsyncTest(formData))
    .unwrap()
    .then(() => {
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

  useEffect(() => {
    setValue('callbackurl', data[0]?.callbackurl )
    setValue('webhookaddress', data[0]?.webhookaddress)
  }, [data, setValue])

  return (
    <div>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

        {/* Test Mode */}
        <div className="w-1/2">
          <p className='w-fit py-2 px-3 rounded-2xl text-[20px] text-[#2D2D2D] font-semibold bg-krsec mt-6'>Test Mode</p>
          {/* message */}
          <p className='w-fit flex items-center py-2 px-2 rounded-2xl text-sm text-[#B54708] font-normal bg-kysec mt-6'>These keys are for testing only. Please DO NOT use them in production. <FiAlertTriangle color='#F79009' className='ml-2'/></p>

          <PasswordField label='Live Secret Key' placeholder='**************************************************' />

          <TextField label='Live Public Key' type="text" placeholder="pk_live_2e9c809e69e463c1f43215786022b8076be8e17a" />

          <div className="flex items-center space-x-6">
            {/* ip whilelist */}
            <h3 className='text-sm text-n800 font-medium'>IP Whitelist</h3>
            {/* IP address && Add Buttin */}
            <div className="flex items-center space-x-2">
              <div className="w-fit h-9 px-4 flex items-center justify-center  rounded-2xl bg-[#F2F4F7]">
                <p className='text-sm text-[#344054] font-normal '>123.345.678</p>
              </div>
              <div className='w-9 h-9 flex items-center justify-center rounded-lg bg-p50'>
                <FaRegTrashAlt color='#4730A3' size={16.67} />
              </div>
              <div className='w-9 h-9 flex items-center justify-center rounded-lg bg-p50'>
                <BsPlus color='#4730A3' size={24}  />
              </div>
            </div>
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
                  <input type="text"  id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6" placeholder="www.untitledui.com" {...register('webhookaddress', { required: true })}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex space-x-8 items-center justify-end">
          <CustomButton title='Cancel' type="button" textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE', width: 147}} />
          <CustomButton title='Save Changes' type="submit" buttonStyle={{width: 147}} />
        </div>
      
      </form>
    </div>
  )
}

export default TestMode