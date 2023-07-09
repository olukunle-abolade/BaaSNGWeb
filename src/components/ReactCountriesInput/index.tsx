import React, { useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import countries from './countries';
import Image from 'next/image';
import './RestCountries.css';

// ...

interface RestCountriesProps {
  containerStyle?: React.CSSProperties;
  flagStyle?: React.CSSProperties;
  selectWrapperStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  onChange: (value: string) => void;
}

interface Country {
  name: string;
  flag: string;
  callingCodes?: string;
}

const RestCountries: React.FC<RestCountriesProps> = ({  containerStyle = {},
  flagStyle = {},
  selectWrapperStyle = {},
  selectStyle = {},
  inputStyle = {},
  onChange
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | {}>({});
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const country: Country | undefined = countries[Number(value)];
    if (country) {
      setSelectedCountry({
        name: country.name,
        flag: country.flag,
        code: country.callingCodes || '' // Provide a default value
      });
      // setInputValue(country.callingCodes || '');
      setInputValue('');
    }
  };

  return (
    <div className="container" style={containerStyle}>
       {/* {('flag' in selectedCountry) && selectedCountry.flag ? (
        <div className="flag" style={flagStyle}>
          <Image width={38} height={19} alt="" src={selectedCountry.flag} />
        </div>
      ) : null} */}

      <div className="select-wrapper" style={selectWrapperStyle}>
        <select
          className="select"
          style={selectStyle}
          onChange={handleSelectChange}
          value={selectedCountry}
        >
          {countries.map((country, index) => (
            <option key={country.name} value={index}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input
        className="input"
        style={inputStyle}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};



export default RestCountries;