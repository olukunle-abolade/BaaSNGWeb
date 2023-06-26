'use client'
import { SetStateAction, useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'
// Third Party
import { FiEdit3 } from 'react-icons/fi'

// ** Helpers
import { useAppSelector } from '@/hooks/useTypedSelector';
import { NumberFormat } from '@/helpers/convert';

// ** Third Party
import { FormProvider, useForm } from 'react-hook-form';
import { useDebounce } from 'usehooks-ts';
import {RxCrossCircled} from 'react-icons/rx'

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
import { setFormData } from '@/store/app/transaction';

interface FormData {
  accountNumber: string;
}


const IntraBank = () => {
  const [values, setValues] = useState<string>('');
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const debouncedValue = useDebounce<string>(values, 2000)
  const [nameData, setNameData] = useState([])
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const methods = useForm();
  const { setValue } = methods;
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getDashboardInfo = useAppSelector(getDashboardInfoData)
  const getIntraName = useAppSelector(getIntraNameData)
  // console.log(getIntraName, nameData)

  const router = useRouter();

  const onSubmit = (data: any) => {
    const formData = {
      accountdetailsid: 1,
      transactionref: "2323324452454525",
      narration: "trf by Olukunle Abolade",
      senderaccount: data?.accountNumber,
      sendername:"Olukunle Abolade",
      senderbankname: "Beak MFB",
      senderbankcode: "058",
      transferType: data.transferType,
      destinationaccountnumber: data?.accountNumber,
      destinationaccountname: getIntraName?.[0]?.accountname ?? '',
      destinationbankcode: "058",
      polarity: "D",
      amount: data.amount,
      balance: "0",
      benefit: data.beneficiaries
    }

    dispatch(setFormData(formData))
    toggleAddUserDrawer()
    
  };
 


  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const handleChange = (value: string) => {
    if (value.length === 10) {
      setValues(value);
    }
  };

  // Fetch API (optional)
  useEffect(() => {
    const url = `/records/accountdetails?filter=accountnumber,eq,${values}`
    // Do fetch here...
    // Triggers when "debouncedValue" changes
    if(values){
      console.log("dispatched")
      dispatch(fetchAsyncInterBankName({url}))
    }
    
    if (debouncedValue) {
      console.log('Fetching data for debounced value:', debouncedValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleBeneficiaryChange = (value: SetStateAction<string>) => {
    setSelectedBeneficiary(value);
  };

  const handleResetBeneficiary = () => {
    setSelectedBeneficiary('');
    setValue('beneficiaries', ''); // Reset the field value
  };

  // console.log(getIntraName?.[0]?.accountname ?? '')

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
          {selectedBeneficiary !== '' && (
              <>
                <div className="relative">
                  <CustomSelectField
                    name="beneficiaries"
                    label="Beneficiaries"
                    options={[
                      { value: '', label: 'Select' },
                      { value: '2345678901', label: '2345678901' },
                      // Add more options as needed
                    ]}
                    defaultValue="Select Beneficiaries"
                    onChange={(value) => handleBeneficiaryChange(value)}
                  />
                  {selectedBeneficiary !== '' && (
                    <div className='absolute top-[50px] -right-5 cursor-pointer' onClick={handleResetBeneficiary}>
                      <RxCrossCircled color = "#210590" />
                    </div>
                  )}
                
                </div>
              </>
            )}
            {selectedBeneficiary === '' && (
              <>
                <CustomTextField 
                  label='Account Number' 
                  type="text" 
                  name='accountNumber'
                  placeholder="Enter 10 - digit Account Number" 
                  maxLength = {10}
                  rules={{
                    // required: 'Account number is required',
                    pattern: {
                      value: /^\d{10}$/, // Regular expression for accepting decimal numbers up to 2 decimal places
                      message: 'Account number must be a 10-digit number',
                    },
                  }}
                  onChange={(value) => handleChange(value)}
                />  
                {
                  getIntraName?.[0]?.accountname  &&
                  <div className="flex items-center space-x-2 px-1 w-[237px] h-[30px] bg-kpsec rounded-2xl">
                    <p className='text-kprimary text-xs font-medium bg-white rounded-2xl py-1 px-2 w-fit '>Recipient:</p> 
                    <p className='text-kprimary text-xs font-medium'>{getIntraName?.[0]?.accountname ?? ''}</p>
                  </div>
                }
              </>
            )}

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
            {selectedBeneficiary === '' && (
              <p className='text-n100 text-[16px] text-center font-normal mt-6'>or</p>
            )}
            {/* <SelectField label='Beneficiaries'>
              <option value="">Select Beneficiaries</option>
            </SelectField> */}
            {selectedBeneficiary === '' && (
              <>
                <div className="relative">
                  <CustomSelectField
                    name="beneficiaries"
                    label="Beneficiaries"
                    options={[
                      { value: '', label: 'Select' },
                      { value: '2345678901', label: '2345678901' },
                      // Add more options as needed
                    ]}
                    defaultValue="Select Beneficiaries"
                    onChange={(value) => handleBeneficiaryChange(value)}
                  />
                  {selectedBeneficiary !== '' && (
                    <div className='absolute top-[50px] -right-5 cursor-pointer' onClick={handleResetBeneficiary}>
                      <RxCrossCircled color = "#210590" />
                    </div>
                  )}
                
                </div>
              </>
            )}
              <CustomSelectField
                name="transferType"
                label="Tranfer Type"
                options={[
                  { value: 'option1', label: 'Choose ...' },
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