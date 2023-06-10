import Image from 'next/image'
import  { useState } from 'react'

// ** Images
import PImage from '@/assets/images/profile.svg'

// ** Helpers
import { convertToBase64 } from '@/helpers/convert';

// ** Component
import CustomButton from '../user/CustomButton'


const ProfileImage = (image: any) => {
  // state
  const [file, setFile] = useState('');


  /** Formik doesn't does not support file upload so we need to create the handler */
  const onUpload = async (e: any) => {
    const base64:any = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className='flex items-center space-x-4 mt-5'>
      {/* image */}
      <div className="profile flex justify-center py-4 h-[100px] w-[100px] bg-black rounded-full">
        <label htmlFor="profile">
          <Image
            src = {file || PImage}
            alt = ""
            // width = {100}
            // height = {100}
            style={{width: "100%", height: "100%"}}
            className = "rounded-full"
          />
        </label>
        <input
          type="file"
          onChange={onUpload}
          id="profile"
          name="profile"
          className='hidden'
        />
      </div>
    
      {/* button */}
      <div className="grid grid-cols-2 gap-3">
        <CustomButton title='Change Image' textStyle={{color: "#4730A3"}} buttonColor='#E9E6F4' buttonStyle={{width: 130}} />
        <CustomButton title='Delete' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
      </div>
    </div>
  )
}

export default ProfileImage