// ** Third Pary
import {BsFillCheckCircleFill} from 'react-icons/bs'

// ** Components
import CustomButton from '@/components/CustomButton'
import { PasswordField } from '@/components/FormComponent'



const Password = () => {
  const errors = ['At least 8 characters', 'At least 1 upper case letter (A-Z)', 'At least 1 number (0-9)', 'At least 1 symbol (!&#)']
  return (
    <div className='h-[70vh]'>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-1">
          <h3 className='text-[#2D2D2D] text-xl font-semibold'>Passwords</h3>
          <p className='text-[#2D2D2D] text-sm font-normal'>Change your password</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
          <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
        </div>
      </div>

      {/* Form Field */}
      <div className="grid grid-cols-2 gap-24 mt-16 w-fit">
        <div className='w-[340px]'>
          <PasswordField label='Current Password' placeholder='*************' />
          <PasswordField label='New Password' placeholder='*************' />
          <PasswordField label='Confirm Password' placeholder='*************' />
        </div>
        <div className='flex flex-col justify-center  bg-[#f7f7f7] rounded-[20px] px-6 py-3'>
          <h3 className='text-black text-sm font-semibold'>Password must contain:</h3>

          <div className="mt-4">
            {/* Errors */}
            {
              errors.map((error, index) => 
              <>
                <div className="flex flex-row items-center space-x-4 mt-3" key={index}>
                  <BsFillCheckCircleFill className='text-kgreen' />
                  <p className='text-n100 text-sm font-normal'>{error}</p>
                </div>
              </>)
            }
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Password