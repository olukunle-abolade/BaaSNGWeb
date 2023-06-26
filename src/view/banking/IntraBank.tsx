'use client'
import { useEffect, useState } from 'react'

// Third Party
import { FiEdit3 } from 'react-icons/fi'

// ** Helpers
import { useAppSelector } from '@/hooks/useTypedSelector';
import { NumberFormat } from '@/helpers/convert';

// ** Third Party
import { FormProvider, useForm } from 'react-hook-form';
import { useDebounce } from 'usehooks-ts';

// ** Slice
import { getDashboardInfoData } from '@/store/app/dashboard';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { getIntraNameData } from '@/store/app/intrabank'

// ** Components 
import { CustomSelectField, CustomTextField, SelectField, TextField } from '@/components/FormComponent'
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import PaymentSummary from './PaymentSummary';
import { fetchAsyncInterBankName } from '@/store/app/intrabank';

interface FormData {
  accountNumber: string;
}


const IntraBank = () => {
  const [value, setValue] = useState<string>('');
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const debouncedValue = useDebounce<string>(value, 2000)
  const [nameData, setNameData] = useState([])

  const methods = useForm();

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  // const getIntraName = useAppSelector(getIntraNameData)
  // console.log(getIntraName)

  const onSubmit = (data: any) => {
    const formData = {
      accountdetailsid: 1,
      transactionref: "2323324452454525",
      narration: "trf by Olukunle Abolade",
      senderaccount: data?.accountNumber,
      sendername:"Olukunle Abolade",
      senderbankname: "Beak MFB",
      senderbankcode: "058",
      destinationaccountnumber: data?.accountNumber,
      destinationaccountname: nameData[0]?.accountname,
      destinationbankcode: "058",
      polarity: "D",
      amount: data.amount,
      balance: "0"
    }

    console.log(formData)
  };
 

  const getDashboardInfo = useAppSelector(getDashboardInfoData)

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const handleChange = (value: string) => {
    
    if (value.length === 10) {
      setValue(value);
    }
  };

  // Fetch API (optional)
  useEffect(() => {
    const url = `/records/accountdetails?filter=accountnumber,eq,${value}`
    // Do fetch here...
    // Triggers when "debouncedValue" changes
    if(value){
      dispatch(fetchAsyncInterBankName({url}))
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult)
        setNameData(originalPromiseResult?.records)
      })
    }
    
    if (debouncedValue) {
      console.log('Fetching data for debounced value:', debouncedValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  console.log(nameData)

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
              onChange={(value) => handleChange(value)}
            />  
            {
              nameData.length > 0 &&  <div className="flex items-center space-x-2 px-1 w-[237px] h-[30px] bg-kpsec rounded-2xl">
              <p className='text-kprimary text-xs font-medium bg-white rounded-2xl py-1 px-2 w-fit '>Recipient:</p> 
              <p className='text-kprimary text-xs font-medium'>{nameData[0]?.accountname} </p>
            </div>
            }
           

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