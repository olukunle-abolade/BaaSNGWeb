// ** Components
import {  SelectField, TextField } from '@/components/FormComponent'

const Bussiness = () => {
  return (
    <div>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-2">
          <h3 className='text-[#2D2D2D] text-4xl font-semibold'>Business Information (for KYCB)</h3>
          <p className='text-n100 text-lg font-normal'>Provide your personal information, so we can get<br/>to know you. </p>
        </div>
      </div>
      {/* Form Field */}
      <div className="grid grid-cols-2 gap-x-4 w-fit h-fit">
        <div className='h-fit'>
          <TextField label="Business name" type="text" placeholder='Ninja Creative Studio' />
        </div>
        <div className=''>
          <TextField label="Business registration number" type="text" placeholder='345-558-377' />
        </div>
        <div className=''>
          <TextField label="Business phone number" type="text" placeholder='345-558-377' />
        </div>
        <div className=''>
          <TextField label="Business email" type="text" placeholder='ninjacreativestudio@gmail.com' />
        </div>
        <div className=''>
          <TextField label="Business website" type="text" placeholder='www.baas.com' />
        </div>
        <div className=''>
          <TextField label="Business address" type="text" placeholder='12 Jame John close, Ikoji Lagos.' />
        </div>
        <div className=''>
          <SelectField label='Business type'>
            <option value="">Proprietorship</option>
          </SelectField>
        </div>
        <div className=''>
          <SelectField label='Business industry'>
            <option value="">Finance</option>
          </SelectField>
        </div>
      </div>
    </div>
  )
}

export default Bussiness