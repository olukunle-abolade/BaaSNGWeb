import { useEffect, useState } from 'react'



// ** Hooks 
import { useAuth } from '@/hooks/useAuth';

//** RTQ
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { fetchAsyncBusinessIndustry, fetchAsyncBusinessType, getMiscellaneousCountries, getMiscellaneousGender, getMiscellaneousIdType, getMiscellaneousOccupation } from '@/store/app/miscellaneous'
import { MyData, fetchAsyncProfile, postAsyncProfile, updateAsyncProfile } from '@/store/app/profile'

// ** Third Party 
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'

// ** Components
import CustomButton from '@/components/CustomButton'
import {  SelectField, TextField } from '@/components/FormComponent'
import ProfileImage from '@/components/profile-image';

export interface UserData {
  id?: number
  firstname?: string
  gender?: string
  dateofbirth?: string
  country?: string
  phonenumber?: string
  address?: any
  idtype?: any
  occupation?: string
  businessname?: string
  businessregnumber?: string
  businessphonenumber?: string
  businessemail?: string
  website?: string
  businessaddress?: string
  businesstype?: string
  businessindustry?: string
  sourceoffund?: string
  purposeofaccount?: string
}

const defaultValues: UserData = {
  firstname: '',
  dateofbirth: '',
  gender: '',
  country: '',
  phonenumber: '',
  address: '',
  idtype: '',
  occupation: ''
}

const Profile = () => {
  const {  setValue, handleSubmit, register } = useForm({
    defaultValues,
    mode: 'onChange'
  })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const [data, setData] = useState<UserData[]>([])
  const [idType, setIdType] = useState<any[]>([])
  const [gender, setGender] = useState<any[]>([])
  const [countries, setCountries] = useState<any[]>([])
  const [occupation, setOccupation] = useState<any[]>([])

  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id

  const url = `/records/profile/${data[0]?.id}`

  const onSubmit = (data: UserData) => {
    const formData = {
      url: url,
      firstname: data.firstname,
      dateofbirth: data.dateofbirth,
      address: data.address,
      phone: data.phonenumber,
      country: data.country,
      idtype: data.idtype,
      occupation: data.occupation
    }

    console.log(formData)
    dispatch(updateAsyncProfile(formData))
      .unwrap()
      .then((originalPromiseResult: MyData) => {
        // originalPromiseResult.code === 1012 || 1021 ?
        //   toast.error(originalPromiseResult.message)
        // :
        toast.success("Profile Update Successful")
      }) 
      .catch(rejectedValueorSerializedError => {
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)

        }
      })
  }

  // Get Gender
  useEffect(() => {
    const url = '/records/gender';
    dispatch(fetchAsyncBusinessType({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          // work need to be done here conditon
          setGender(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  // Get Country
  useEffect(() => {
    // url
    const url = '/records/countries';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setCountries(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  // Get ID Type
  useEffect(() => {
    // url
    const url = '/records/idtype';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setIdType(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  // Get Occupation
  useEffect(() => {
    // url
    const url = '/records/occupation';
    dispatch(fetchAsyncBusinessIndustry({url}))
      .unwrap()
        .then((originalPromiseResult) => {
          console.log(originalPromiseResult)
          // work need to be done here conditon
          setOccupation(originalPromiseResult.records)
        })
        .catch((rejectedValueorSerializedError) => {
          {
            rejectedValueorSerializedError &&
              toast.error(rejectedValueorSerializedError.message)
          }
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    const profileInfo = {
      url: `/records/profile/?filter=userid,eq,${userId}`,
    }
    dispatch(fetchAsyncProfile(profileInfo))
      .unwrap()
      .then(originalPromiseResult => {
        // console.log(originalPromiseResult.status)
        // originalPromiseResult.status === 200 &&

        setData(originalPromiseResult.records)
      })
      .catch(rejectedValueorSerializedError => {
        console.log(rejectedValueorSerializedError.message)
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue('firstname', data[0]?.firstname )
    setValue('address', data[0]?.address)
    setValue('country', data[0]?.country)
    setValue('dateofbirth', data[0]?.dateofbirth)
    setValue('gender', data[0]?.gender)
    setValue('idtype', data[0]?.idtype)
    setValue('phonenumber', data[0]?.phonenumber)
    setValue('occupation', data[0]?.occupation)
  }, [data, setValue])

  console.log(data)

  return (
    <div className='h-full'>
      {/* Form Field */}
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <div className="flex items-center justify-between mt-8">
          <div className="space-y-1">
            <h3 className='text-[#2D2D2D] text-xl font-semibold'>Profile Settings</h3>
            <p className='text-[#2D2D2D] text-sm font-normal'>Update your photo and personal details here.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
            <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
          </div>
        </div>

        <ProfileImage />

    
        <div className="grid grid-cols-2 gap-24 mt-10 w-fit">
          <div className='w-[340px]'>
            <TextField label="Full name" type="text"  {...register('firstname', { required: true })}/>
            <TextField label="DOB" type="date"  {...register('dateofbirth', { required: true })} />
            <TextField label="phone" type="text"  {...register('phonenumber', { required: true })} />
            <SelectField label='ID type' {...register('idtype', { required: true })}  >
              <option value="" disabled>Select ID type</option>
                {idType && idType.length > 0
                  ? idType.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.idname}
                        </option>
                      );
                    })
                : ''}
            </SelectField>
            <SelectField label='Occupation' {...register('occupation', { required: true })} >
              <option value="" disabled>Select Occupation</option>
                {occupation && occupation.length > 0
                  ? occupation.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.occupation}
                        </option>
                      );
                    })
                  : ''}
            </SelectField>
          </div>
          <div className=''>
            <SelectField label='Gender' {...register('gender', { required: true })} >
              <option value="" disabled>Select Gender</option>
                {gender && gender.length > 0
                  ? gender.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.gender}
                        </option>
                      );
                    })
                : ''}
            </SelectField>
            <SelectField label='Country' {...register('country', { required: true })} >
              <option value="" disabled>Select Country</option>
                {countries && countries.length > 0
                  ? countries.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.countryname}
                        </option>
                      );
                    })
                : ''}
            </SelectField>
            <TextField label="Address" type="text" {...register('address', { required: true })}  />
            <TextField label="ID Number" type="text" placeholder='345-558-377.' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Profile