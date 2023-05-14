// ** Components
import {  SelectField, TextField } from '@/components/FormComponent'


const Personal = () => {
  return (
    <div>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-1">
          <h3 className='text-[#2D2D2D] text-4xl font-semibold'>Profile Settings</h3>
          <p className='text-p200 text-lg font-medium'>@oopeoluwa@gmail.com</p>
          <p className='text-n100 text-lg font-normal'>Provide your personal information, so we can get<br/>to know you. </p>
        </div>
      </div>
      {/* Form Field */}
      <div className="grid grid-cols-2 gap-24 mt-10 w-fit">
        <div className='w-[340px]'>
          <TextField label="Full name" type="text" placeholder='Ogunmdede Opeoluwa' />
          <TextField label="DOB" type="date" placeholder='Ogunmdede Opeoluwa' />
          <SelectField label='ID type'>
            <option value="">NIN</option>
          </SelectField>
          <SelectField label='Occupation'>
            <option value="">Doctor</option>
          </SelectField>
        </div>
        <div className=''>
          <SelectField label='Gender'>
            <option value="">Male</option>
          </SelectField>
          <TextField label="Address" type="text" placeholder='12 Jame John close, Ikoji Lagos.' />
          <TextField label="ID Number" type="text" placeholder='345-558-377.' />
        </div>
      </div>
    </div>
  )
}

export default Personal