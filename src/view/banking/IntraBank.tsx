'use client'
import { useState } from 'react'

// Third Party
import { FiEdit3 } from 'react-icons/fi'

// ** Helpers
import { useAppSelector } from '@/hooks/useTypedSelector';
import { NumberFormat } from '@/helpers/convert';

// ** Third Party
import { FormProvider, useForm } from 'react-hook-form';

// ** Slice
import { getDashboardInfoData } from '@/store/app/dashboard';

// ** Components 
import { CustomSelectField, CustomTextField, SelectField, TextField } from '@/components/FormComponent'
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import PaymentSummary from './PaymentSummary';

interface FormData {
  accountNumber: string;
}


const IntraBank = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)

  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
 

  const getDashboardInfo = useAppSelector(getDashboardInfoData)

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  // Watch Account Number Input Field


  return (
    <div>
      {/* chip */}
      <div className="flex items-center space-x-2 px-1 w-[237px] h-[30px] bg-kpsec rounded-2xl">
        <p className='text-kprimary text-xs font-medium bg-white rounded-2xl py-1 px-2 w-fit '>Available Balance:</p> 
        <p className='text-kprimary text-xs font-medium'>₦ {NumberFormat(getDashboardInfo?.actualbalance)} </p>
      </div>

      <div className="mt-8 space-y-2">
        <h1 className='text-n800 text-3xl font-semibold'>Intrabank transfer</h1>
        <p className='text-n100 text-sm font-normal'>Send money to BaaS friends and family.</p>
      </div>
      <FormProvider {...methods}>
        <form noValidate autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='mt-10'>
            <CustomTextField 
              label='Account Number' 
              type="text" 
              name='accountNumber'
              placeholder="Enter 10 - digit Account Number" 
              maxLength = {10}
              rules={{
                required: 'Account number is required',
                pattern: {
                  value: /^\d{10}$/, // Regular expression for accepting decimal numbers up to 2 decimal places
                  message: 'Account number must be a 10-digit number',
                },
              }}
            />  

            <CustomTextField 
              label='Amount' 
              name='amount'
              type="text" 
              placeholder="₦ 10.00-₦ 5,000,000.00" 
              formatAmountInput
              rules={{
                required: 'Amount number is required',
              }}
            />

            <div className="relative mt-6">
              <input className="appearance-none border border-n40 bg-purple-50 rounded-lg w-full h-[44px] pl-12 text-n50 text-[16px] font-normal  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a note"></input>
              <FiEdit3 className='text-n100 absolute left-5 top-[14.5px]' size={15}/>
            </div>

            <p className='text-n100 text-[16px] text-center font-normal mt-6'>or</p>
            
            <SelectField label='Beneficiaries'>
              <option value="">Select Beneficiaries</option>
            </SelectField>

            <CustomSelectField
              name="tranferType"
              label="Tranfer Type"
              options={[
                { value: 'option1', label: 'One Time' },
                { value: 'Hourly', label: 'Hourly' },
                { value: 'Daily', label: 'Daily' },
                { value: 'Weekly', label: 'Weekly' },
                { value: 'Monthly', label: 'Monthly' },
                { value: 'Yearly', label: 'Yearly' },
                // Add more options as needed
              ]}
              defaultValue="Select Transfer Type"
              rules={{
                required: 'This field is required',
              }}
            />
            {/* <SelectField label='Transfer Type'>
              <option value="">Select Transfer Type</option>
              <option value="">One Time</option>
              <option value="">Hourly</option>
              <option value="">Daily</option>
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </SelectField> */}

            <CustomButton title='Next'  buttonStyle={{marginTop: 10}} />
          </div>
        </form>
      </FormProvider>
     
      <SidebarAddUser title='Payment summary' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <PaymentSummary />
      </SidebarAddUser>
    </div>
  )
}

export default IntraBank