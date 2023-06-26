'use client'

import  { ForwardedRef, ReactNode, forwardRef, useEffect, useState } from 'react';

// ** Styles
import {
  FormField,
  Label,
  PasswordType,
} from '../styles/formcomponent.style';

// ** Third Party
import { FieldValues, useFormContext } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type ICustomInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  disabled?: any;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  password?: boolean;
  onChange?: (value: string) => void;
  rules?: Partial<FieldValues>;
  formatAmountInput?: boolean
} 




export const CustomTextField = forwardRef(function CustomTextField(
  {
    name,
    label,
    defaultValue,
    placeholder,
    type = 'text',
    maxLength,
    rules,
    formatAmountInput,
    password,
    onChange,
    ...rest
  }: ICustomInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState<string>(defaultValue || '');
  const { register, formState: { errors }, watch, setValue, trigger } = useFormContext<FieldValues>();
  const watchedValue = watch(name);



  useEffect(() => {
    register(name, rules);
  }, [name, register, rules]);

  const formatValue = (value: string | number) => {
    if (typeof value === 'string') {
      // Remove thousands separators before parsing the number
      const parsedValue = parseFloat(value.replace(/,/g, ''));
      if (!isNaN(parsedValue)) {
        // Format the parsed value with thousands separators
        return parsedValue.toLocaleString();
      }
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value); // Update the field value
    trigger(name); // Trigger validation for the field

    if (onChange) {
      onChange(value); // Call the onChange prop with the updated value
    }
  };

  const hasError = errors[name] !== undefined;

  return (
    <FormField>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={show ? 'text' : type}
        value={formatAmountInput ? formatValue(watchedValue): watchedValue}
        onChange={handleChange}
        maxLength={maxLength}
        style={{ borderColor: hasError && 'red' }}
        {...rest}
      />
      {password &&
      <span className="p_visible absolute right-2 top-10 mr-2" onClick={() => setShow(!show)}>
            {!show ? <FiEye /> : <FiEyeOff />}
          </span>}
      {errors[name] && (
        <span role="alert" className='text-kred text-xs font-normal'>{String(errors[name]?.message)}</span>
      )}
    </FormField>
  );
});

interface ICustomSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  rules?: Partial<FieldValues>;
}

export const CustomSelectField = forwardRef(
  function CustomSelectField({name, label, options,onChange, defaultValue, rules}: ICustomSelectProps, ref: React.ForwardedRef<HTMLSelectElement>){

    const { register, formState: { errors }, setValue, trigger, watch } = useFormContext<FieldValues>();
    const watchedValue = watch(name);

    useEffect(() => {
      register(name, rules);
    }, [name, register, rules]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setValue(name, value); // Update the field value
      trigger(name); // Trigger validation for the field

      if (onChange) {
        onChange(value); // Call the onChange prop with the updated value
      }
    };

    return (
      <FormField>
        <Label className="mb-2" htmlFor={name}>{label}</Label>
        <div className="flex justify-center">
          <div className="mb  w-full" >
            <select  className=" form-select appearance-none
              block
              w-full
              px-3
              py-2
              mt-2
              text-body4
              font-normal
              text-gray-400
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                name = {name}
                id={name}
                value={watchedValue || defaultValue} // Use the watched value or the defaultValue if available                
                onChange={handleChange}
                ref={ref}        
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {errors[name] && (
          <span role="alert" className='text-kred text-xs font-normal'>{String(errors[name]?.message)}</span>
        )}
      </FormField>
    )
  }
)


export const SelectField = forwardRef(
  function SelectField({name, label, className,onChange, value, children, props}: {
    label?: string;
    type?: any;
    name?: string;
    onChange?: any;
    className?: any;
    errors?: any;
    placeholder?: any;
    value?: any;
    props?: any
    children?: ReactNode
  }, ref: React.ForwardedRef<any>){
    return (
      <FormField className={className}>
        <Label className="mb-2" htmlFor={name}>{label}</Label>
        <div className="flex justify-center">
          <div className="mb  w-full" >
            <select  className=" form-select appearance-none
              block
              w-full
              px-3
              py-2
              mt-2
              text-body4
              font-normal
              text-gray-400
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                name = {name}
                ref = {ref}
                id={name}
                value={value}
                onChange={onChange}
                {...props}
              >
              {children}
            </select>
          </div>
          </div>
      </FormField>
    )
  }
)


export const TextField = forwardRef(function TextField(
  {
    label,
    type,
    name,
    defaultValue,
    value,
    onChange,
    className,
    placeholder,
  }: {
    label?: string;
    type?: any;
    name?: string;
    defaultValue?: any;
    value?: any;
    onChange?: any;
    className?: any;
    errors?: any;
    placeholder?: any;
  },
  ref: React.ForwardedRef<any>
) {
  return (
    <FormField className={className}>
      <Label htmlFor={name}>{label}</Label>
      {type === 'textarea' && (
        <textarea
          name={name}
          rows = {4}
          id={name}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
      )}
      {[
        'name',
        'email',
        'text',
        'number',
        'tel',
        'date',
        'password',
        'file',
      ].includes(type) && (
        <input
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          ref={ref}
          placeholder={placeholder}
          className={className}
          style={{ marginTop: 8 }}
          // {...props}
        />
      )}
    </FormField>
  );
});



export const PasswordField = forwardRef(function PasswordField(
  {
    name,
    label,
    required,
    defaultValue,
    onChange,
    error,
    disabled,
    placeholder,
  }: {
    name?: string;
    label?: string;
    required?: boolean;
    defaultValue?: string;
    onChange?: any;
    error?: string;
    disabled?: any;
    placeholder?: string;
  },
  ref: React.ForwardedRef<any>
) {
  const [show, setShow] = useState(false);

  return (
    <FormField>
      <Label>{label}</Label>
      <PasswordType style={{ marginTop: 8 }}>
        <input
          disabled={disabled}
          type={show ? 'text' : 'password'}
          name={name}
          id={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
        />
        <span className="p_visible mr-2" onClick={() => setShow(!show)}>
            {!show ? <FiEye /> : <FiEyeOff />}
          </span>
      </PasswordType>
    </FormField>
  );
});


// export const PhoneField = forwardRef(
//   ({ name, label, control, required, defaultValue, onChange, error }, ref) => {
//     return (
//       <FormField>
//         <Label htmlFor={name}>{label}</Label>
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { onChange } }) => (
//             <PhoneInput defaultCountry="NG" onChange={onChange} ref={ref} />
//           )}
//         />
//       </FormField>
//     );
//   }
// );
