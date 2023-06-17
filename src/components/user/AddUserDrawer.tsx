'use clients'

// ** React Imports
import { ReactNode, useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { Icon } from '@iconify/react'
import { Divider } from '@mui/material'

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

// ** Store Imports
// import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
// import { addUser } from 'src/store/apps/user'

// ** Types Imports
// import { RootState, AppDispatch } from 'src/store'
// import { UsersType } from 'src/types/apps/userTypes'

interface SidebarAddUserType {
  title: string
  children: ReactNode
  open: boolean
  toggle: () => void
}

interface UserData {
  email: string
  billing: string
  company: string
  country: string
  contact: number
  fullName: string
  username: string
}

// const showErrors = (field: string, valueLen: number, min: number) => {
//   if (valueLen === 0) {
//     return `${field} field is required`
//   } else if (valueLen > 0 && valueLen < min) {
//     return `${field} must be at least ${min} characters`
//   } else {
//     return ''
//   }
// }

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

// const schema = yup.object().shape({
//   company: yup.string().required(),
//   country: yup.string().required(),
//   billing: yup.string().required(),
//   email: yup.string().email().required(),
//   contact: yup
//     .number()
//     .typeError('Contact Number field is required')
//     .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
//     .required(),
//   fullName: yup
//     .string()
//     .min(3, obj => showErrors('First Name', obj.value.length, obj.min))
//     .required(),
//   username: yup
//     .string()
//     .min(3, obj => showErrors('Username', obj.value.length, obj.min))
//     .required()
// })

const defaultValues = {
  email: '',
  company: '',
  country: '',
  billing: '',
  fullName: '',
  username: '',
  contact: Number('')
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle, title, children } = props

  // ** State
  const [plan, setPlan] = useState<string>('basic')
  const [role, setRole] = useState<string>('subscriber')

  // ** Hooks
  // const dispatch = useDispatch<AppDispatch>()
  // const store = useSelector((state: RootState) => state.user)
  const {
    reset,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    // resolver: yupResolver(schema)
  })
  const onSubmit = (data: any) => {
    // if (store.allData.some((u: UsersType) => u.email === data.email || u.username === data.username)) {
    //   store.allData.forEach((u: UsersType) => {
    //     if (u.email === data.email) {
    //       setError('email', {
    //         message: 'Email already exists!'
    //       })
    //     }
    //     if (u.username === data.username) {
    //       setError('username', {
    //         message: 'Username already exists!'
    //       })
    //     }
    //   })
    // } else {
    //   dispatch(addUser({ ...data, role, currentPlan: plan }))
    //   toggle()
    //   reset()
    // }
  }

  const handleClose = () => {
    setPlan('basic')
    setRole('subscriber')
    setValue('contact', Number(''))
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 450 }, zIndex: 1000 } }}
    >
      <Header>
        <h3 className='text-lg text-[#2D2D2D font-medium]'>{title}</h3>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='bx:x' fontSize={20} />
        </IconButton>
      </Header>
      <Divider sx={{backgroundColor: '#210590', height: 2,  width: { xs: 300, sm: 450 }}}  />
      <Box sx={{ p: 5 }}>
       {children}
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
