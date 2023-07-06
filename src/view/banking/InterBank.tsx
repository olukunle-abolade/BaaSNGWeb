'use client'
import { FC, SetStateAction, useEffect, useState } from 'react'

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
import { toast } from 'react-hot-toast';

// ** Slice
import { getDashboardInfoData } from '@/store/app/dashboard';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { clearInterBankName, getIntraNameData } from '@/store/app/intrabank'
import { fetchAsyncBeneficiariesWithName, getBeneficiariesWithNameData } from '@/store/app/beneficiaries';
import { fetchAsyncNigeriaBank, getMiscellaneousNigerianBanks, getMiscellaneousTransferType } from '@/store/app/miscellaneous';

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

interface IInterBankProps {
  setIntraBankOpen: any
}

const InterBank: FC<IInterBankProps> = ({setIntraBankOpen}) => {
  const [values, setValues] = useState<string>('');
  const [paymentSummaryOpen, setPaymentSummaryOpen] = useState<boolean>(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [isAvail, setIsAvail] = useState(false)
  const debouncedValue = useDebounce<string>(selectedBank, 500)
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const getTransferType = useAppSelector(getMiscellaneousTransferType)


  // ** Use Form Hook
  const methods = useForm();
  const { setValue, formState, reset } = methods;

  const { isValid } = formState; // Get the validation status of the form

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const getDashboardInfo = useAppSelector(getDashboardInfoData)
  const getIntraName = useAppSelector(getIntraNameData)
  const getBeneficiaries = useAppSelector(getBeneficiariesWithNameData)
  const getNigerianBanks = useAppSelector(getMiscellaneousNigerianBanks)
  console.log(getBeneficiaries)
  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id
  // const username = auth.user.

  // split beneficiries accoutname from account number
  const togglePaymentSummaryDrawer = async () => {
    setPaymentSummaryOpen(true);

    if(paymentSummaryOpen){
      setIntraBankOpen(false);
    }
  };

  const onSubmit = (data: any) => {
    const input = data.beneficiaries;

    console.log(input)
    if(input){
      const [name, number, bankcode, bankname= "Default Bank Name" ] = input?.split('-');

      const formData = {
        accountdetailsid: 1,
        transactionref: "2323324452454525",
        narration: "narration",
        senderaccount: "0751252171",
        sendername: getDashboardInfo?.firstname ?? "",
        senderbankname: "Beak MFB",
        senderbankcode: "058",
        transferType: data.transferType,
        destinationaccountnumber: data?.accountNumber ? data?.accountNumber : number.trim(),
        destinationaccountname: getIntraName?.[0]?.accountname ??  name.trim(),
        destinationbankcode: data?.bank ? data?.bank : bankcode.trim(),
        destinationbankname: bankname ? bankname.trim() : "",
        polarity: "D",
        amount: data.amount,
        balance: "0",
      }
      dispatch(setFormData(formData))
      togglePaymentSummaryDrawer()
      console.log(formData)
    }else{
      const input = data.bank;
      const [bankcode, bankname ] = input?.split('-');

      const formData = {
        accountdetailsid: 1,
        transactionref: "2323324452454525",
        narration: "narration",
        senderaccount: "0751252171",
        sendername: getDashboardInfo?.firstname ?? "",
        senderbankname: "Beak MFB",
        senderbankcode: "058",
        transferType: data.transferType,
        destinationaccountnumber: data?.accountNumber ? data?.accountNumber : "",
        destinationaccountname: getIntraName?.[0]?.accountname,
        destinationbankcode: bankcode ? bankcode.trim() : "",
        destinationbankname: bankname ? bankname.trim() : "",
        polarity: "D",
        amount: data.amount,
        balance: "0",
      }
      dispatch(setFormData(formData))
      togglePaymentSummaryDrawer()
      console.log(formData)
    }
  
  };
 



  const handleChange = (value: string) => {
    if (value.length === 10) {
      setValues(value);
    }
  };


  const handleBeneficiaryChange = (value: SetStateAction<string>) => {
    setSelectedBeneficiary(value);
    setValue('accountNumber', ''); // Reset the field value
  };

  const handleBankChange = (value: SetStateAction<string>) => {
    setSelectedBank(value);
  };

  console.log(selectedBank)

  const handleResetBeneficiary = () => {
    setSelectedBeneficiary('');
    setValue('beneficiaries', ''); // Reset the field value
    setValue('bank', ''); // Reset the field value
    setIsAvail(false)
    dispatch(clearInterBankName());
  };

  // Fetch API (optional)
  useEffect(() => {
    const url = `/records/beneficiaries?filter=userid,eq,${userId}`
    dispatch(fetchAsyncBeneficiariesWithName({url}))
    console.log("dispatch")
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Spread beneficiaries into option and values
  let convertedData: { value: string; label: string }[] = [];

  if (getBeneficiaries) {
    convertedData = [
      { value: '', label: 'Select' }, // Default select option with empty value
      ...getBeneficiaries.map((item) => ({
        value: `${item.accountname}-${item.accountnumber}-${item.nipbankcode}-${item.bankname}`,
        label: `${item.accountname} (${item.accountnumber}${item?.bankname})`
      }))
    ];
  }

  let convertedBank: { value: string; label: string }[] = [];
  if (getNigerianBanks) {
    convertedBank = [
      { value: '', label: 'Select' }, // Default select option with empty value
      ...getNigerianBanks.map((item) => ({
        value: `${item.nipbankcode}-${item.bankname}`,
        label: item.bankname
      }))
    ];
  }

  // Get Business Industry
  useEffect(() => {
    // url
    const url = '/records/nigeriabanks';
    dispatch(fetchAsyncNigeriaBank({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch API (optional)
  useEffect(() => {
    const input = selectedBank;
    const [bankcode, bankname ] = input?.split('-');

    const url = `/records/nameenquiry?filter=accountnumber,eq,${values}&filter=nipbankcode,eq,${bankcode}`
    // Do fetch here...
    // Triggers when "debouncedValue" changes
    if(selectedBank){
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
  }, [debouncedValue, dispatch, values]);

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


  console.log(selectedBank)


  return (
    <div>
      {/* chip */}
      <div className="flex items-center space-x-2 px-1 w-[237px] h-[30px] bg-kpsec rounded-2xl">
        <p className='text-kprimary text-xs font-medium bg-white rounded-2xl py-1 px-2 w-fit '>Available Balance:</p> 
        <p className='text-kprimary text-xs font-medium'>₦ {NumberFormat(getDashboardInfo?.actualbalance)} </p>
      </div>

      <div className="mt-8 space-y-2">
        <h1 className='text-n800 text-3xl font-semibold'>Interbank transfer</h1>
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
              <div className="">
                <div>
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

                </div>
                <div>
                  <div className="relative">
                    <CustomSelectField
                      name="bank"
                      label="Bank"
                      setOptions={convertedBank}
                      defaultValue="Select Bank"
                      onChange={(value) => handleBankChange(value)}
                    />
                    {isAvail  && (
                      <div className="flex items-center space-x-2  py-2 px-3   bg-kpsec rounded-2xl">
                        <p className='text-kred text-xs font-medium'>
                          Account does not exist at the Beneficiary&apos;s bank.
                          Please check the details and try again.
                        </p>
                      </div>
                    )}
                  
                  </div>
                </div>
              </div>
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
            <CustomButton title='Next' type="submit"  disabled={!isValid || isAvail}  buttonStyle={ !isValid || isAvail && {marginTop: 10, backgroundColor: "#A499D1"}} />
          </div>
        </form>
      </FormProvider>
              
      {
        paymentSummaryOpen &&
        <SidebarAddUser header clearName  title='Payment summary' open={paymentSummaryOpen} toggle={togglePaymentSummaryDrawer} reset = {reset} closeButton closeNested={true}>
          <PaymentSummary  setIntraBankOpen={setIntraBankOpen} setPaymentSummaryOpen={setPaymentSummaryOpen}/>
        </SidebarAddUser>
      }
      
    </div>
  )
}

export default InterBank


// ** Performace Issue
/**
 * 
 * Handle Bank Name Change reload the entire component
 */