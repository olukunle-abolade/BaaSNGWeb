'use client'

import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'


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
import { getAccountData } from '@/store/app/account';

// ** Components 
import { CustomSelectField, CustomTextField, CustomTextFieldNarration, SelectField, TextField } from '@/components/FormComponent'
import CustomButton from '@/components/user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import PaymentSummary from './PaymentSummary';
import { fetchAsyncInterBankName } from '@/store/app/intrabank';
import { setFormData } from '@/store/app/transaction';
import { fetchAsyncTransferType, getMiscellaneousTransferType } from '@/store/app/miscellaneous';

interface FormData {
  accountNumber: string;
}

interface IInterBankProps {
  setIntraBankOpen: any
}

interface FormData {
  accountdetailsid: number | undefined;
  transactionref: string;
  narration: string;
  senderaccount: string | undefined;
  sendername: string | undefined;
  senderbankname: string | undefined;
  senderbankcode: string | undefined;
  transferType: string;
  destinationaccountnumber: string;
  destinationaccountname: string;
  destinationbankcode: string;
  polarity: string;
  amount: number;
  balance: string;
}


const IntraBank: FC<IInterBankProps> = ({setIntraBankOpen}) => {
  const [values, setValues] = useState<string>('');
  const [paymentSummaryOpen, setPaymentSummaryOpen] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(values, 500)
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const [isAvail, setIsAvail] = useState(false)
  const [clearName, setClearName] = useState(true)

  const togglePaymentSummaryDrawer = async () => {
    setPaymentSummaryOpen(true);

    if(paymentSummaryOpen){
      setIntraBankOpen(false);
    }
  };

  // ** Get Sender Account
  const accountData = useAppSelector(getAccountData)
  console.log(accountData)
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

    console.log(data.narration)

    if(input){
      const [name, number, code] = input?.split('-');

      const formData = {
        accountdetailsid: accountData?.[0]?.id ,
        transactionref: "2323324452454525",
        narration: data.narration,
        senderaccount: accountData?.[0]?.accountnumber,
        sendername: accountData?.[0]?.accountname,
        senderbankname: accountData?.[0]?.bank,
        senderbankcode: accountData?.[0]?.bankcode,
        transferType: data.transferType,
        destinationaccountnumber: number.trim(),
        destinationaccountname:  name.trim(),
        destinationbankcode: code.trim(),
        polarity: "D",
        amount: data.amount,
        balance: accountData?.[0]?.balance,
      }
      dispatch(setFormData(formData))
      togglePaymentSummaryDrawer()
      // toggleIntraBankDrawer()

    }else{
      const formData = {
        accountdetailsid: accountData?.[0]?.id,
        transactionref: "2323324452454525",
        narration: data.narration,
        senderaccount: accountData?.[0]?.accountnumber,
        sendername: accountData?.[0]?.accountname,
        senderbankname: accountData?.[0]?.bank,
        senderbankcode: accountData?.[0]?.bankcode,
        transferType: data.transferType,
        destinationaccountnumber: data?.accountNumber ? data?.accountNumber : "",
        destinationaccountname: getIntraName?.[0]?.accountname,
        destinationbankcode: getIntraName?.[0].bankcode,
        polarity: "D",
        amount: data.amount,
        balance: accountData?.[0]?.balance,
      }
      dispatch(setFormData(formData))
      togglePaymentSummaryDrawer()
      // toggleIntraBankDrawer()
    }
  };
 
  // const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

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
        value: `${item.accountname}-${item.accountnumber}-${item.bankcodeid}`,
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
  console.log(isAvail);

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

            {/* <div className="relative mt-6">
              <input className="appearance-none border border-n40 bg-purple-50 rounded-lg w-full h-[44px] pl-12 text-n50 text-[16px] font-normal  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a note" />
              <FiEdit3 className='text-n100 absolute left-5 top-[14.5px]' size={15}/>
            </div> */}

            {/* <div className='relative'>
              <CustomTextField 
                label='Narration' 
                name='narration'
                type="text" 
                placeholder="Narration" 
                className="appearance-none border border-n40 bg-purple-50 rounded-lg w-full h-[44px] pl-12 text-n50 text-[16px] font-normal  leading-tight focus:outline-none focus:shadow-outline"
              />
              <FiEdit3 className='text-n100 absolute left-5 top-[14.5px]' size={15}/>
            </div> */}
            <CustomTextFieldNarration 
              name='narration'
              placeholder='Narration'
            />

            {selectedBeneficiary === '' && (
              <p className='text-n100 text-[16px] text-center font-normal mt-6'>or</p>
            )}

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
            <CustomButton title='Next' type="submit"  disabled={!isValid || isAvail}  buttonStyle={ !isValid || isAvail ? {marginTop: 10, backgroundColor: "#A499D1"}: null} />
          </div>
        </form>
      </FormProvider>

      {paymentSummaryOpen ? (
        <SidebarAddUser header closeButton title='Payment summary' open={paymentSummaryOpen} toggle={togglePaymentSummaryDrawer} clearName={clearName} >
          <PaymentSummary setIntraBankOpen={setIntraBankOpen}  setPaymentSummaryOpen={setPaymentSummaryOpen} />
        </SidebarAddUser>
      ) : null}
    </div>
  )
}

export default IntraBank