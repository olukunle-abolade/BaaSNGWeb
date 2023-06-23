import { useState } from 'react'

// ** Third Party
import { FaCheck } from 'react-icons/fa'

// ** Components
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import TrasactionModal from '@/components/Modal/Modal';


const Success = () => {
  const [reciept, setReceipt] = useState<boolean>(false)
  const toggleReceiptDrawer = () => setReceipt(!reciept)

  // Modal Toggller
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex flex-col items-center w-full'>
      {/* icon logo */}
      <div className='flex items-center justify-center mx-auto mb-5 w-[81px] h-[81px] rounded-full bg-kgreen border-[15px]  border-[rgba(18, 183, 106, 0.1)]'>
        <FaCheck color='#FFFFFF' />
      </div>
      
      <h3 className='text-n800 text-lg font-semibold mb-6'>Enter your transaction pin</h3>

      {/* price */}
      <p className='text-black text-3xl font-semibold'>₦200.00</p>

      {/* table */}
      <div className="w-full mt-14 space-y-8">
        {/*  */}
        <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Network Provider</p>
          {/* desc */}
          <h3 className="text-black text-lg font-semibold">Airtel</h3>
        </div>
         {/*  */}
         <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Recipient</p>
          {/* desc */}
          <h3 className="text-black text-lg font-semibold">081 345 6332</h3>
        </div>
         {/*  */}
         <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Fee</p>
          {/* desc */}
          <h3 className="text-black text-lg font-semibold">₦0.00</h3>
        </div>
         {/*  */}
         <div className="flex items-center justify-between">
          {/* name */}
          <p className='text-n800 text-lg font-medium'>Payment Method</p>
          {/* desc */}
          <h3 className="text-black text-lg font-semibold">Balance</h3>
        </div>
      </div>

      {/* button */}
      <div className="grid grid-cols-2 gap-4 w-full mt-14">
        <CustomButton title='Complete' onClick={handleOpen} buttonStyle={{backgroundColor: "#E9E6F4"}} titleColor="#4730A3" />
        <CustomButton title='View Receipt' />
      </div>
      <SidebarAddUser title='' open={reciept} toggle={toggleReceiptDrawer} >
        {/* <Success /> */}
      </SidebarAddUser>

      {/* Modal */}
      <TrasactionModal open = {open} btitle1='No' btitle2='Yes' handleModal={() => null} handleClose={handleClose} title='Save last recipients as a beneficiary' subtitle='Do you confirm to this ?'  />
    </div>
  )
}

export default Success