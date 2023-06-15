import { useEffect, useState } from 'react'

// ** Hooks 
import { useAuth } from '@/hooks/useAuth';

//** RTQ
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { MyData, fetchAsyncNotification, updateAsyncNotification } from '@/store/app/notification';

// ** Third Party 
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'

// ** Components
import CustomButton from '@/components/user/CustomButton'

export interface IPreference {
  currency?: string;
  language?: string
  timezone?: string
  transreceipt_sendtome?: boolean
  transreceipt_sendtorecipient?: boolean
  paymethod_banktransfer?: boolean
  paymethod_card?: boolean
  paymethod_ussd?: boolean
  paymethod_qrcode?: boolean
}

export interface INotification{
  id?: number
  alerts_push?: boolean;
  alerts_email?: boolean
  alerts_sms?: boolean
  msgs_push?: boolean
  msgs_email?: boolean
  msgs_sms?: boolean
}

const defaultValues: INotification = {
  alerts_push: false,
  alerts_email: false,
  alerts_sms: false,
  msgs_push: false,
  msgs_email: false,
  msgs_sms: false
}

const Notification = () => {
  const [data, setData] = useState<INotification[]>([])

  const {  setValue, handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange'
  })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id

  console.log(data)
  const url = `/records/notifications/${data[0]?.id}`

  const onSubmit = (data: INotification) => {
    const formData = {
      url: url,
      alerts_push: data.alerts_push,
      alerts_email: data.alerts_email,
      alerts_sms: data.alerts_sms,
      msgs_push: data.msgs_push,
      msgs_email: data.msgs_email,
      msgs_sms: data.msgs_sms,
    }

    console.log(formData)
    dispatch(updateAsyncNotification(formData))
      .unwrap()
      .then((originalPromiseResult: MyData) => {
        toast.success("Notification Update Successful")
      }) 
      .catch(rejectedValueorSerializedError => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

        }
      })
  }

  useEffect(() => {
    const profileInfo = {
      url: `/records/notifications/?filter=userid,eq,${userId}`,
    }
    dispatch(fetchAsyncNotification(profileInfo))
      .unwrap()
      .then(originalPromiseResult => {
        // console.log(originalPromiseResult.status)
        // originalPromiseResult.status === 200 &&
        console.log(originalPromiseResult)
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

  console.log(data)

  useEffect(() => {
    setValue('alerts_push', data[0]?.alerts_push)
    setValue('alerts_email', data[0]?.alerts_email)
    setValue('alerts_sms', data[0]?.alerts_sms)
    setValue('msgs_push', data[0]?.msgs_push)
    setValue('msgs_email', data[0]?.msgs_email)
    setValue('msgs_sms', data[0]?.msgs_sms)
  }, [data, setValue])

  return (
    <div className='h-full'>
      {/*  */}
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h3 className='text-[#2D2D2D] text-xl font-semibold'>Notification settings</h3>
            <p className='text-[#2D2D2D] text-sm font-normal'>Adjust notification settings</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
            <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
          </div>
        </div>


        {/*  Switch */}
        <div className="grid  gap-x-4 mt-2 w-1/2 h-fit">
          <table className="border-separate border-spacing-y-20 ">
            <thead className='space-y-8'>
              <tr className='w-full border border-slate-300 space-y-2'>
                <td className="text-black text-sm align-text-top font-medium">
                  Transaction receipts
                  <p className='text-n100 text-sm font-normal mt-2'>These are notifications for alerts on your<br/>transactions.(Debits and credits)</p>
                </td>
                <td className="flex flex-col space-y-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" {...register('alerts_push')} className="sr-only peer "/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-kprimary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-kprimary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                  </label>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" {...register('alerts_email')} className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-kprimary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-kprimary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                  </label>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" {...register('alerts_sms')} className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-kprimary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-kprimary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                  </label>
                </td>
              </tr>
              <tr>
              <td className="text-black text-sm align-text-top font-medium">
                  Messages
                  <p className='text-n100 text-sm font-normal mt-2'>These are notifications for messages<br/>received from chats and direct<br/>messages.</p>
                </td>
                <td className="flex flex-col space-y-4">
                  <label className="relative inline-flex items-center w-full cursor-pointer">
                    <input type="checkbox"  {...register('msgs_push')} className=""/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-kprimary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-kprimary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                  </label>

                  <label className="relative inline-flex items-center cursor-pointer w-full">
                    <input type="checkbox"  {...register('msgs_email')} className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-kprimary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-kprimary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                  </label>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox"  {...register('msgs_sms')} className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-kprimary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-kprimary"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                  </label>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </form>
    </div>
  )
}

export default Notification