import Image from 'next/image'
import { useEffect, useState } from 'react'

// ** Third Pary
import { useForm } from 'react-hook-form';
import { Renderable, Toast, ValueFunction, toast } from 'react-hot-toast'

// ** Hooks 
import { useAuth } from '@/hooks/useAuth';

//** RTQ
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { fetchAsyncPreferences } from '@/store/app/preferences';

// ** Components
import CustomButton from '@/components/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'
import { updateAsyncPreferences } from '@/store/app/preferences';
import { MyData } from '@/store/app/preferences';
import { fetchAsyncBusinessIndustry } from '@/store/app/miscellaneous';

export interface IPreference {
  id?:number;
  currency?: string;
  language?: string
  timezone?: string
  transreceipt_sendtome?: boolean
  transreceipt_sendtorecipient?: boolean
  paymethod_banktransfer?: boolean
  OTP_sendviaemail?: boolean
  paymethod_card?: boolean
  paymethod_ussd?: boolean
  paymethod_qrcode?: boolean
}

const defaultValues: IPreference = {
  currency: '',
  language: '',
  timezone: '',
  transreceipt_sendtome: false,
  transreceipt_sendtorecipient: false,
  paymethod_banktransfer: false,
  OTP_sendviaemail: false,
  paymethod_card: false,
  paymethod_ussd: false,
  paymethod_qrcode: false,
}


const Preferences = () => {
  const [data, setData] = useState<IPreference[]>([])
  const [countries, setCountries] = useState<any[]>([])

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
  const url = `/records/preferences/${data[0]?.id}`

  const onSubmit = (data: IPreference) => {
    const formData = {
      url: url,
      currency: data.currency,
      language: data.language,
      timezone: data.timezone,
      transreceipt_sendtome: data.transreceipt_sendtome,
      transreceipt_sendtorecipient: data.transreceipt_sendtorecipient,
      paymethod_banktransfer: data.paymethod_banktransfer,
      OTP_sendviaemail: data.OTP_sendviaemail,
      paymethod_card: data.paymethod_card,
      paymethod_ussd: data.paymethod_ussd,
      paymethod_qrcode: data.paymethod_qrcode,
    }

    console.log(formData)
    dispatch(updateAsyncPreferences(formData))
      .unwrap()
      .then((originalPromiseResult: MyData) => {
        toast.success("Notification Update Successful")
      }) 
      .catch((rejectedValueorSerializedError: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

        }
      })
  }

  // Get Country
  useEffect(() => {
    // url
    const url = '/records/countries';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setCountries(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const profileInfo = {
      url: `/records/preferences/?filter=userid,eq,${userId}`,
    }
    dispatch(fetchAsyncPreferences(profileInfo))
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

  console.log(data[0]?.timezone)

  useEffect(() => {
    setValue('currency', data[0]?.currency)
    // setValue('language', data[0]?.language)
    setValue('timezone', data[0]?.timezone)
    setValue('transreceipt_sendtome', data[0]?.transreceipt_sendtome)
    setValue('transreceipt_sendtorecipient', data[0]?.transreceipt_sendtorecipient)
    setValue('OTP_sendviaemail', data[0]?.OTP_sendviaemail)
    setValue('paymethod_banktransfer', data[0]?.paymethod_banktransfer)
    setValue('paymethod_card', data[0]?.paymethod_card)
    setValue('paymethod_ussd', data[0]?.paymethod_ussd)
    setValue('paymethod_qrcode', data[0]?.paymethod_qrcode)
  }, [data, setValue])

  console.log(countries)
  return (
    <div className='h-full'>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

        {/*  */}
        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h3 className='text-[#2D2D2D] text-xl font-semibold'>Preferences</h3>
            <p className='text-[#2D2D2D] text-sm font-normal'>Adjust modes to suit your taste.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
            <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
          </div>
        </div>


        {/* Form Field */}
        <div className="grid grid-cols-2 gap-x-4 mt-6 w-fit h-fit">
          <div className='w-[340px] h-fit'>
            <SelectField label='Currency'   {...register('currency')}>
              {countries && countries.length > 0
                ? countries.map((item, index) => {
                    return (
                      <option value={`${item.countryname} - ${item.currencycode}`} key={index}>
                        {`${item.countryname} - ${item.currencycode}`}
                      </option>
                    );
                  })
                : ''}
            </SelectField>
          </div>
          <div className=''>
            <SelectField label='Language' {...register('language')}>
              <option value="">Select Language</option>
              <option value="">English (UK)</option>
            </SelectField>
          </div>
          <div className=''>
            <TextField label="Time Zone" type="text" {...register('timezone', { required: true })}/>

            {/* <SelectField label='Time Zone' {...register('timezone')}>
              <option value="GMT+1">Select Time Zone</option>
              <option value="GMT+1">GMT +01 (Nigeria)</option>
            </SelectField> */}
          </div>
          <div className=''>
            <SelectField label='Financial Year'>
              <option value="">Select Final Year</option>
              <option value="">January - December</option>
            </SelectField>
          </div>
        </div>

        {/*  Switch */}
        <div className="grid  gap-x-4 mt-6 w-full h-fit">
        <table className="border-separate border-spacing-y-20 ">
          <thead className='space-y-8'>
            <tr className='w-full border border-slate-300 '>
              <td className="text-black text-sm align-text-top font-medium">Transaction receipts</td>
              <td className="flex flex-col space-y-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"  {...register('transreceipt_sendtome')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send to me</span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"  {...register('transreceipt_sendtorecipient')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send to Recipient</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="text-black text-sm font-medium align-text-top">OTP confirmation</td>
              <td className="flex flex-col space-y-4">
                {/* <label className="relative inline-flex items-center w-full cursor-pointer">
                  <input type="checkbox"  {...register('alerts_push')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm transfers before sending</span>
                </label> */}

                <label className="relative inline-flex items-center cursor-pointer w-full">
                  <input type="checkbox"  {...register('OTP_sendviaemail')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send OTP via Email</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="text-black text-sm font-medium align-text-top">Payment method</td>
              <td className="flex flex-col space-y-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"  {...register('paymethod_banktransfer')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Bank Transfer</span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"  {...register('paymethod_card')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Card</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"  {...register('paymethod_ussd')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">USSD</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox"  {...register('paymethod_qrcode')} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">QR Payment</span>
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

export default Preferences