'use clients'

// ** React Imports
import { ReactNode, useEffect, useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'


// ** Slice
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { clearInterBankName } from '@/store/app/intrabank'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'
import { Icon } from '@iconify/react'
import { Divider } from '@mui/material'

// ** Components
import TrasactionModal from '../Modal/Modal'


interface SidebarAddUserType {
  title: string
  children: ReactNode
  open: boolean
  toggle: () => void
  reset?: any
  header?: boolean
  clearName?: boolean;
  closeButton?: boolean
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle, reset, clearName, title,closeButton, header, children } = props

  // states
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    toggle(); 
    dispatch(clearInterBankName()); 
  } 

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  console.log(clearName)


  // ** State
  const [isClearName, setIsClearName] = useState(false);


  // console.log(clearName)
  // useEffect(() => {
  //   console.log(clearName);
  // }, [clearName]);


  const handleCloseDrawer = () => {
    console.log(clearName)
    // toggle()
    if (clearName) {
      {/* Modal */}
      setOpenModal(true);
     
    }else{
      toggle();
    }
  }

  return (
    <>
      <Drawer
        open={open}
        anchor='right'
        variant='temporary'
        onClose={handleCloseDrawer}
        // ModalProps={{ disableBackdropClick: true }}      
        sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 450 }, zIndex: 1000 } }}
      >
        {
          header && (

            <>
              <Header>
                <h3 className='text-lg text-[#2D2D2D font-medium]'>{title}</h3>

                {
                  closeButton && 
                  <IconButton size='small' onClick={handleCloseDrawer} sx={{ color: 'text.primary' }}>
                    <Icon icon='bx:x' fontSize={20} />
                  </IconButton>
                }
                
              </Header>
                <Divider sx={{backgroundColor: '#210590', height: 2,  width: { xs: 300, sm: 450 }}}  />
            </>
          )
         
        }
        
        <Box sx={{ p: 5 }}>
        {children}
        </Box>
      </Drawer>

      <TrasactionModal open = {openModal} btitle1='Leave' btitle2='Continue' handleModal={() => setOpenModal(false)} handleClose={handleClose} title='Payment is not yet completed' subtitle='Do you confirm to leave?'  />
    </>
   
  )
}

export default SidebarAddUser
