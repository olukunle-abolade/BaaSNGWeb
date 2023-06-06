import React, { FC } from 'react'

// ** Third Pary
import { useForm } from 'react-hook-form';
import { Renderable, Toast, ValueFunction, toast } from 'react-hot-toast'

// ** RTQ
import { fetchAsyncIP, postAsyncIP } from '@/store/app/ipwhitelist';

// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

// ** Hooks **
import { useAuth } from '@/hooks/useAuth';

// ** Components
import CustomButton from '@/components/CustomButton'
import { TextField } from '@/components/FormComponent'
import SidebarAddUser from '@/components/user/AddUserDrawer'
import IpList from '../IpList/IpList';

export interface ISideAdd {
  addUserOpen: boolean
  toggleAddUserDrawer: () => void
}

interface IP {
  ip: string
}

const defaultValues = {
  ip: ''
}

const AddIP: FC<ISideAdd> = ({addUserOpen, toggleAddUserDrawer}) => {
  const { handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange',
  });

   // ** Hooks
   const dispatch = useDispatch<AppDispatch>()

  // Context
  const auth = useAuth()

  // ** User Id
  const userId = auth.user?.id
  console.log(userId)

  const url = "/records/ipwhitelist"
  
  const onSubmit = (data: IP) => {
  
    const formData = {
      url: url,
      userid: userId,
      ipaddress: data.ip,
    }

    console.log(formData)
    dispatch(postAsyncIP(formData))
      .unwrap()
      .then((originalPromiseResult) => {
        toast.success("Saved Successful")
        const url = `/records/ipwhitelist/?filter=userid,eq,${userId}`
        dispatch(fetchAsyncIP({url}))
        .unwrap()
        .then((originalPromiseResult) => {
        }) 
        .catch((rejectedValueorSerializedError: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
          {
            rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)
    
          }
        })
      })
      .catch((rejectedValueorSerializedError: { message: Renderable | ValueFunction<Renderable, Toast>; }) => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

        }
      })
  }

  return (
    <div>
       <SidebarAddUser title='QR Payment' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <TextField label='IP' type="text" placeholder="123.345.678" {...register('ip', { required: true })} />
          <IpList  />
          <CustomButton title='Next' buttonStyle={{width: 147}} />
        </form>
      </SidebarAddUser>
    </div>
  )
}

export default AddIP