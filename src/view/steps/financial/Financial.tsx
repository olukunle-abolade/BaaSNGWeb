import { useContext, useEffect, useState } from 'react'

//** RTQ
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/hooks/useTypedSelector'
import { AppDispatch } from '@/store'
import { fetchAsyncBusinessIndustry, fetchAsyncBusinessType, fetchAsyncPurposeOfAccout, fetchAsyncSourceOfFund, getMiscellaneousCountries, getMiscellaneousGender, getMiscellaneousIdType, getMiscellaneousOccupation } from '@/store/app/miscellaneous'

// ** Third Party 
import { toast } from 'react-hot-toast'

// ** Context
import { StepperContext } from '@/contexts/StepperContext'

// ** Components
import {  SelectField } from '@/components/FormComponent'

const Financial = () => {
  const {userData, setUserData} = useContext(StepperContext)
  const [source, setSource] = useState<any[]>([])
  const [purpose, setPurpose] = useState<any[]>([])
   // ** Hooks
   const dispatch = useDispatch<AppDispatch>()

  const handleChange = (e: any) => {
    const {name , value} = e.target
    setUserData({...userData, [name]: value})
  }

   // Get sourceoffund
   useEffect(() => {
    // url
    const url = '/records/sourceoffund';
    dispatch(fetchAsyncSourceOfFund({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          // work need to be done here conditon
          setSource(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

     // Get Purpose of Account
  useEffect(() => {
    // url
    const url = '/records/purposeofaccount';
    dispatch(fetchAsyncPurposeOfAccout({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          // work need to be done here conditon
          setPurpose(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(source)
    // console.log(purpose)
  return (
    <div>
      <div className="mb-1 mt-8">
        <h3 className='text-black text-[20px] font-bold'>Financial Information</h3> 
        <p className='text-n100 text-xs font-normal'>Provide your financial information, so we know you status and run a check.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 w-[74%]  h-fit">
        <div className=''>
          <SelectField 
            label='Source of Fund'
            onChange={handleChange}
            name='sounces'
            value = {userData["sources"] || ""}
          >
            <option value="" disabled>Select Sources</option>
            {source && source.length > 0
              ? source.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.sourceoffund}
                    </option>
                  );
                })
              : ''}
          </SelectField>
        </div>
        <div className=''>
          <SelectField 
            label='Purpose of account'
            onChange={handleChange}
            name='purpose_of_account'
            value = {userData["purpose_of_account"] || ""}
          >
            <option value="" disabled>Select Account Purpose</option>
            {purpose && purpose.length > 0
              ? purpose.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.purposeofaccount}
                    </option>
                  );
                })
              : ''}
          </SelectField>
        </div>
      </div>
    </div>
  )
}

export default Financial