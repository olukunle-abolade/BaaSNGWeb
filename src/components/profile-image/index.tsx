import Image from 'next/image'
import React from 'react'
import CustomButton from '../CustomButton'

const ProfileImage = (image: any) => {
  return (
    <div className='flex items-center space-x-4 mt-5'>
      {/* image */}
      <div className="flex items-center justify-center w-[111.11px] h-[111.11px] rounded-full bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.1)]">
        <Image
          src = {image}
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
  )
}

export default ProfileImage