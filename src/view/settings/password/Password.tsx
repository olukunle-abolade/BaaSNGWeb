// ** Third Pary
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { useForm } from 'react-hook-form';

// ** Hooks **
import { useAuth } from '@/hooks/useAuth';

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

// ** Components
import CustomButton from '@/components/CustomButton'
import { PasswordField } from '@/components/FormComponent'
import { MyData, postAsyncPasswordChange } from '@/store/app/password-change';
import { toast } from 'react-hot-toast';

interface IPasswordData {
  email: string;
  password: string;
  newPassword: string;
  confirmPassword?: string;
}

const defaultValues = {
  email: '',
  password: '',
  newPassword: '',
  confirmPassword: '' 
}

const Password = () => {
  const { handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  // Context
  const auth = useAuth()

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Email Address
  const email = auth.user?.email
  console.log(email)

  const errors = ['At least 8 characters', 'At least 1 upper case letter (A-Z)', 'At least 1 number (0-9)', 'At least 1 symbol (!&#)']

  const onSubmit = async (data: IPasswordData) => {
    const url = "/password"
    console.log(data)
    const formData = {
      url: url,
      email: email,
      password: data.password,
      newPassword: data.newPassword
    }
    dispatch(postAsyncPasswordChange(formData))
      .unwrap()
      .then((originalPromiseResult: MyData) => {
        originalPromiseResult.code === 1012 || 1021 ?
          toast.error(originalPromiseResult.message)
        :
        toast.success("Password Update Successful")
      })
    }

  return (
    <div className='h-[70vh]'>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h3 className='text-[#2D2D2D] text-xl font-semibold'>Passwords</h3>
            <p className='text-[#2D2D2D] text-sm font-normal'>Change your password</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
            <CustomButton title='Save Changes' type="submit" buttonStyle={{width: 147}} />
          </div>
        </div>

        {/* Form Field */}
        <div className="grid grid-cols-2 gap-24 mt-16 w-fit">
          <div className='w-[340px]'>
            <PasswordField label='Current Password' placeholder='*************'  {...register('password', { required: true })}/>
            <PasswordField label='New Password' placeholder='*************'  {...register('newPassword', { required: true })}/>
            <PasswordField label='Confirm Password' placeholder='*************' {...register('confirmPassword', { required: true })}/>
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
      </form>
    </div>
  )
}

export default Password