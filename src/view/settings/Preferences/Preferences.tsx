import Image from 'next/image'

// ** Third Pary
import {BsFillCheckCircleFill} from 'react-icons/bs'

// ** Images
import ProfileImage from '@/assets/images/profile.svg'

// ** Components
import CustomButton from '@/components/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'


const Preferences = () => {
  return (
    <div className='h-full'>
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
        <SelectField label='Currency'>
          <option value="">NGN - Nigerian Naira</option>
        </SelectField>
      </div>
      <div className=''>
        <SelectField label='Language'>
          <option value="">English (UK)</option>
        </SelectField>
      </div>
      <div className=''>
        <SelectField label='Time Zone'>
          <option value="">GMT +01 (Nigeria)</option>
        </SelectField>
      </div>
      <div className=''>
        <SelectField label='Financial Year'>
          <option value="">January - December</option>
        </SelectField>
      </div>
    </div>

    {/*  Switch */}
    <div className="grid grid-cols-2 gap-x-4 mt-6 w-full h-fit">
    <table className="border-separate border-spacing-20">
      <thead className='space-y-8'>
        <tr className='w-fit '>
          <td className="text-black text-sm font-medium ">Transaction receipts</td>
          <td className="flex flex-col space-y-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send to me</span>
            </label>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send to Recipient</span>
            </label>
          </td>
        </tr>
        <tr>
          <td className="text-black text-sm font-medium">OTP confirmation</td>
          <td className="flex flex-col space-y-4">
            <label className="relative inline-flex items-center w-full cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm transfers before sending</span>
            </label>

            <label className="relative inline-flex items-center cursor-pointer w-full">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send OTP via Email</span>
            </label>
          </td>
        </tr>
        <tr>
          <td className="text-black text-sm font-medium">Payment method</td>
          <td className="flex flex-col space-y-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Bank Transfer</span>
            </label>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Card</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">USSD</span>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">QR Payment</span>
            </label>
          </td>
        </tr>
      </thead>
      {/* <tbody>
        <tr>
          <td className="border border-slate-300 ...">Indiana</td>
          <td className="border border-slate-300 ...">Indianapolis</td>
        </tr>
        <tr>
          <td className="border border-slate-300 ...">Ohio</td>
          <td className="border border-slate-300 ...">Columbus</td>
        </tr>
        <tr>
          <td className="border border-slate-300 ...">Michigan</td>
          <td className="border border-slate-300 ...">Detroit</td>
        </tr>
      </tbody> */}
    </table>
    </div>
  </div>
  )
}

export default Preferences