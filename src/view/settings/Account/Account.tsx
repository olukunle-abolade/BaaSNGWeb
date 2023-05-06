import { FC, useState } from 'react';
import Image from 'next/image'

// ** Images
import ProfileImage from '@/assets/logo.png'

// ** Components
import CustomButton from '@/components/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'
import { ProgressBar } from '@/styles/widget.style';

// ** Third Party
import { AiOutlineFile } from 'react-icons/ai'

interface IProgress {
  done: string;
  days: string;
}

const Progress: FC<IProgress> = ({ done, days }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <div className='flex items-center space-x-2'>
      
      <ProgressBar>
        <div className="progress-done" style={style}>
          {/* {done}% */}
        </div>
      </ProgressBar>
      {/* days */}
      <h4 className='text-n100 text-sm font-medium'>{days}%</h4>
    </div>
  );
};

const Document = ( ) => {
  return (
    <div className="space-y-2">
      {/* title */}
      <h3 className='text-sm text-n800 font-medium'>ID documents <span className='text-xs text-n100 font-normal'>(e.g. passport, ID card)</span></h3>
      <div className="flex flex-col justify-center w-[342px] h-[126px] rounded-xl border border-p200 ">
        <div className="px-4">
          {/* upper part */}
          <div className="flex justify-between ">
            <div className='flex items-center space-x-2'>
              <div className="flex items-center justify-center w-[38.29px] h-[38.29px] rounded-full border-4 border-p50 bg-[#F5F5F5]">
                <AiOutlineFile  color = "#7E6EBF" />
              </div>

              <div className="">
                {/* file name  */}
                <h3 className='text-p200 text-sm font-medium'>Tech design requirements.pdf</h3>
                {/* file size */}
                <p className='text-n100 text-xm font-normal'>200 KB</p>
              </div>
            </div>
            <input id="default-checkbox" type="checkbox" checked value="" className="w-4 h-4 text-kprimary bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          </div>
          {/* progressive part */}
          <Progress done='100' days='100' />
        </div>
      </div>
    </div>
  )
}

const Account = () => {
  return (
    <div className='h-full'>
    {/*  */}
    <div className="flex items-center justify-between mt-8">
      <div className="space-y-1">
        <h3 className='text-[#2D2D2D] text-xl font-semibold'>Account Settings</h3>
        <p className='text-[#2D2D2D] text-sm font-normal'>Update your Business details here.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
        <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
      </div>
    </div>

    {/* profie picture */}
    <div className='flex items-center space-x-4 mt-5'>
      {/* image */}
      <div className="flex items-center justify-center w-[111.11px] h-[111.11px] rounded-full bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.1)]">
        <Image
          src = {ProfileImage}
          alt = ""
          width = {100}
          height = {100}
          className = "rounded-full"
        />
      </div>
      {/* button */}
      <div className="grid grid-cols-2 gap-3">
        <CustomButton title='Change Image' textStyle={{color: "#4730A3"}} buttonColor='#E9E6F4' buttonStyle={{width: 130}} />
        <CustomButton title='Delete' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
      </div>
    </div>

    {/* Form Field */}
    <div className="mb-1 mt-8">
      <h3 className='text-black text-[20px] font-bold'>Business Information (for KYCB)</h3> 
      <p className='text-n100 text-xs font-normal'>Provide your personal information, so we can get to know you.</p>
    </div>
    <div className="grid grid-cols-2 gap-x-4 w-fit h-fit">
      <div className='w-[340px] h-fit'>
        <TextField label="Business name" type="text" placeholder='Ninja Creative Studio' />
      </div>
      <div className=''>
        <TextField label="Business registration number" type="text" placeholder='345-558-377' />
      </div>
      <div className=''>
        <TextField label="Business phone number" type="text" placeholder='345-558-377' />
      </div>
      <div className=''>
        <TextField label="Business email" type="text" placeholder='ninjacreativestudio@gmail.com' />
      </div>
      <div className=''>
        <TextField label="Business website" type="text" placeholder='www.baas.com' />
      </div>
      <div className=''>
        <TextField label="Business address" type="text" placeholder='12 Jame John close, Ikoji Lagos.' />
      </div>
      <div className=''>
        <SelectField label='Business type'>
          <option value="">Proprietorship</option>
        </SelectField>
      </div>
      <div className=''>
        <SelectField label='Business industry'>
          <option value="">Finance</option>
        </SelectField>
      </div>
    </div>

    {/* Form Field */}
    <div className="mb-1 mt-8">
      <h3 className='text-black text-[20px] font-bold'>Financial Information</h3> 
      <p className='text-n100 text-xs font-normal'>Provide your financial information, so we know you status and run a check.</p>
    </div>
    <div className="grid grid-cols-2 gap-x-4 w-[74%]  h-fit">
      <div className=''>
        <SelectField label='Business industry'>
          <option value="">Finance</option>
        </SelectField>
      </div>
      <div className=''>
        <SelectField label='Purpose of account'>
          <option value="">Investment</option>
        </SelectField>
      </div>
    </div>

    {/* Form Field */}
    <div className=" my-8 ">
      <h3 className='text-black text-[20px] font-bold'>KYC and AML</h3> 
      <p className='text-n100 text-xs font-normal'>(Anti-Money Laundering) Compliance Check.</p>
    </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 w-[74%]  h-fit">
      <div className='flex items-center border border-n50 rounded-lg h-20'>
        <p className='text-n800 text-lg font-medium pl-10'>Consent for verification of personal and business information</p>
      </div>
      <div className='flex items-center border border-n50 rounded-lg h-20'>
        <p className='text-n800 text-lg font-medium pl-10'>Consent for verification of personal and business information</p>
      </div>
    </div>

     {/* Form Field */}
    <div className=" my-8 ">
      <h3 className='text-black text-[20px] font-bold'>Supporting Documents</h3> 
      <p className='text-n100 text-xs font-normal'>(Anti-Money Laundering) Compliance Check.</p>
    </div>
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[74%]  h-fit">
      <Document />
      <Document />
      <Document />
      <Document />
    </div>
  </div>
  )
}

export default Account