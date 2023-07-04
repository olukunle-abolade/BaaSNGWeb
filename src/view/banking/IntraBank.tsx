'use client'
import { SetStateAction, useEffect, useState } from 'react'

// Third Party
import { FiEdit3 } from 'react-icons/fi'

// ** Contexts
import { useAuth } from '@/hooks/useAuth';

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
import { clearInterBankName, getIntraNameData } from '@/store/app/intrabank'
import { fetchAsyncBeneficiariesWithoutName, getBeneficiariesWithoutNameData } from '@/store/app/beneficiaries';

// ** Components 
import { CustomSelectField, CustomTextField, SelectField, TextField } from '@/components/FormComponent'
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import PaymentSummary from './PaymentSummary';
import { fetchAsyncInterBankName } from '@/store/app/intrabank';
import { setFormData } from '@/store/app/transaction';
import { fetchAsyncTransferType, getMiscellaneousTransferType } from '@/store/app/miscellaneous';

interface FormData {
  accountNumber: string;
}


const IntraBank = () => {
  const [values, setValues] = useState<string>('');
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const debouncedValue = useDebounce<string>(values, 500)
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const [isAvail, setIsAvail] = useState(false)
  const [clearName, setClearName] = useState(true)
  // ** Use Form Hook
  const methods = useForm({
    mode: 'onChange'
  });
  const { setValue , formState} = methods;

  const { isValid } = formState; // Get the validation status of the form
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getDashboardInfo = useAppSelector(getDashboardInfoData)
  const getIntraName = useAppSelector(getIntraNameData)
  const getBeneficiaries = useAppSelector(getBeneficiariesWithoutNameData)
  const getTransferType = useAppSelector(getMiscellaneousTransferType)

  console.log("intra", getBeneficiaries)

  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id
  // const username = auth.user.

  // split beneficiries accoutname from account number

  const onSubmit = (data: any) => {
    const input = data.beneficiaries;

    if(input){
      const [name, number] = input?.split('-');

      const formData = {
        accountdetailsid: 1,
        transactionref: "2323324452454525",
        narration: "trf by Olukunle Abolade",
        senderaccount: "0751252171",
        sendername:"Olukunle Abolade",
        senderbankname: "Beak MFB",
        senderbankcode: "058",
        transferType: data.transferType,
        destinationaccountnumber: number.trim(),
        destinationaccountname:  name.trim(),
        destinationbankcode: "058",
        polarity: "D",
        amount: data.amount,
        balance: "0",
      }
      dispatch(setFormData(formData))
      toggleAddUserDrawer()
    }else{
      const formData = {
        accountdetailsid: 1,
        transactionref: "2323324452454525",
        narration: "trf by Olukunle Abolade",
        senderaccount: "0751252171",
        sendername:"Olukunle Abolade",
        senderbankname: "Beak MFB",
        senderbankcode: "058",
        transferType: data.transferType,
        destinationaccountnumber: data?.accountNumber ? data?.accountNumber : "",
        destinationaccountname: getIntraName?.[0]?.accountname,
        destinationbankcode: "058",
        polarity: "D",
        amount: data.amount,
        balance: "0",
      }
      dispatch(setFormData(formData))
      toggleAddUserDrawer()
    }
    
    
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
      .unwrap()
      .then((originalPromiseResult) => originalPromiseResult.records.length === 0 ? setIsAvail(true) : setIsAvail(false))

      // .then((originalPromiseResult) => originalPromiseResult.records.length === 0 ? setIsAvail(true) : setIsAvail(false))
    }
    
    if (debouncedValue) {
      console.log('Fetching data for debounced value:', debouncedValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleBeneficiaryChange = (value: SetStateAction<string>) => {
    setSelectedBeneficiary(value);
    setValue('accountNumber', ''); // Reset the field value
  };

  const handleResetBeneficiary = () => {
    setSelectedBeneficiary('');
    setValue('beneficiaries', ''); // Reset the field value
    dispatch(clearInterBankName());
  };

  // Fetch API (optional)
  useEffect(() => {
    const url = `/records/savedbeneficiaries?filter=userid,eq,${userId}`
    dispatch(fetchAsyncBeneficiariesWithoutName({url}))
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   // Fetch API (optional)
   useEffect(() => {
    const url = `/records/transferfrequency`
    dispatch(fetchAsyncTransferType({url}))
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Spread beneficiaries into option and values
  let convertedData: { value: string; label: string }[] = [];

  if (getBeneficiaries) {
    convertedData = [
      { value: '', label: 'Select' }, // Default select option with empty value
      ...getBeneficiaries.map((item) => ({
        value: `${item.accountname}-${item.accountnumber}`,
        label: `${item.accountname} (${item.accountnumber})`
      }))
    ];
  }

  // Spread transfer type into value and label
  let convertTransferType: { value: string; label: string }[] = [];

  if (getTransferType) {
    convertTransferType = [
      { value: '', label: 'Select' }, // Default select option with empty value
      ...getTransferType.map((item) => ({
        value: item.frequency,
        label: item.frequency
      }))
    ];
  }

  console.log(getTransferType);


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
                    setOptions={convertedData}
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
                {isAvail  && (
                 <div className="flex items-center space-x-2  py-2 px-3  bg-kpsec rounded-2xl">
                      <p className='text-kred text-xs font-medium'>
                        Account does not exist at the Beneficiary&apos;s bank.
                        Please check the details and try again.
                      </p>
                    </div>
                )}
              </>
            )}

            <CustomTextField 
              label='Amount' 
              name='amount'
              type="text" 
              placeholder="₦ 10.00-₦ 5,000,000.00" 
              formatAmountInput
              rules={{
                required: 'Amount is required',
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
                    setOptions={convertedData}
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
              setOptions={convertTransferType}
              defaultValue="Select Transfer Type"
              rules={{
                required: 'This field is required',
              }}
            />
            <CustomButton title='Next' type="submit"  disabled={!isValid}  buttonStyle={ !isValid && {marginTop: 10, backgroundColor: "#A499D1"}} />
          </div>
        </form>
      </FormProvider>

      {addUserOpen ? (
        <SidebarAddUser header closeButton title='Payment summary' open={addUserOpen} toggle={toggleAddUserDrawer} clearName={clearName} >
          <PaymentSummary />
        </SidebarAddUser>
      ) : null}
    </div>
  )
}

export default IntraBank