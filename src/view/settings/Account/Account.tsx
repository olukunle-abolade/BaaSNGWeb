import Image from 'next/image'

// ** Images
import ProfileImage from '@/assets/logo.png'

// ** Components
import CustomButton from '@/components/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'


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
      <div className="space-y-2">
        {/* title */}
        <h3 className='text-sm text-n800 font-medium'>ID documents <span className='text-xs text-n100 font-normal'>(e.g. passport, ID card)</span></h3>
        <div className="w-[342px] h-[126px] rounded-xl border border-p200 ">

        </div>
      </div>
      <div className="space-y-2">
        {/* title */}
        <h3 className='text-sm text-n800 font-medium'>ID documents <span className='text-xs text-n100 font-normal'>(e.g. passport, ID card)</span></h3>
        <div className="w-[342px] h-[126px] rounded-xl border border-p200 ">
          <div className="">
            <div className="flex items-center">
              {/* avatar */}
              <div className="w-[38.29px] h-[38.29px] rounded-full border-4 border-p50 bg-[#F5F5F5]"></div>

              <div className="">
                {/* file name  */}
                <h3 className='text-p200 text-sm font-medium'>Tech design requirements.pdf</h3>
                {/* file size */}
                <p className='text-n100 text-xm font-normal'>200 KB</p>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Account