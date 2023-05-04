import Image from 'next/image'

// ** Images
import ProfileImage from '@/assets/images/profile.svg'

// ** Components
import CustomButton from '@/components/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'


const Profile = () => {
  return (
    <div className='h-full'>
    {/*  */}
    <div className="flex items-center justify-between mt-8">
      <div className="space-y-1">
        <h3 className='text-[#2D2D2D] text-xl font-semibold'>Profile Settings</h3>
        <p className='text-[#2D2D2D] text-sm font-normal'>Update your photo and personal details here.</p>
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
    <div className="grid grid-cols-2 gap-24 mt-10 w-fit">
      <div className='w-[340px]'>
        <TextField label="Full name" type="text" placeholder='Ogunmdede Opeoluwa' />
        <TextField label="DOB" type="date" placeholder='Ogunmdede Opeoluwa' />
        <SelectField label='ID type'>
          <option value="">NIN</option>
        </SelectField>
        <SelectField label='Occupation'>
          <option value="">Doctor</option>
        </SelectField>
      </div>
      <div className=''>
        <SelectField label='Gender'>
          <option value="">Male</option>
        </SelectField>
        <TextField label="Address" type="text" placeholder='12 Jame John close, Ikoji Lagos.' />
        <TextField label="ID Number" type="text" placeholder='345-558-377.' />
      </div>
    </div>
  </div>
  )
}

export default Profile