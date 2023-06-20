'use client'
import { useState } from 'react'

// ** Components 
import { SelectField, TextField } from '@/components/FormComponent'
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import PaymentSummary from './PaymentSummary';

// Third Party
import { FiEdit3 } from 'react-icons/fi'

const IntraBank = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const toggleModalDrawer = () => setModalOpen(!modalOpen)
  return (
    <div>
      {/* chip */}
      <div className="flex items-center space-x-2 px-1 w-[237px] h-[30px] bg-kpsec rounded-2xl">
        <p className='text-kprimary text-xs font-medium bg-white rounded-2xl py-1 px-2 w-fit '>Available Balance:</p> 
        <p className='text-kprimary text-xs font-medium'>₦ 1,340,040.00 </p>
      </div>

      <div className="mt-8 space-y-2">
        <h1 className='text-n800 text-3xl font-semibold'>Intrabank transfer</h1>
        <p className='text-n100 text-sm font-normal'>Send money to BaaS friends and family.</p>
      </div>

      <div className='mt-10'>
        <TextField label='Account Number' type="text" placeholder="Enter 10 - digit Account Number" />
        <TextField label='Amount' type="text" placeholder="₦ 10.00-₦ 5,000,000.00" />

       

        <div className="relative mt-6">
          <input className="appearance-none border border-n40 bg-purple-50 rounded-lg w-full h-[44px] pl-12 text-n50 text-[16px] font-normal  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a note"></input>
          <FiEdit3 className='text-n100 absolute left-5 top-[14.5px]' size={15}/>
        </div>

        <p className='text-n100 text-[16px] text-center font-normal mt-6'>or</p>
        
        <SelectField label='Beneficiaries'>
          <option value="">Select Beneficiaries</option>
        </SelectField>
        <SelectField label='Transfer Type'>
          <option value="">Select Transfer Type</option>
        </SelectField>

        <CustomButton title='Next' onClick={toggleModalDrawer}  buttonStyle={{marginTop: 10}} />
      </div>

      <SidebarAddUser title='Payment summary' open={modalOpen} toggle={toggleModalDrawer} >
        <PaymentSummary />
      </SidebarAddUser>
    </div>
  )
}

export default IntraBank