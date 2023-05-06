import React from 'react'
import { COLORS, SIZES } from '@/assets/theme/theme';
import Image from 'next/image';
import {FiPlusCircle} from 'react-icons/fi'

interface ButtonType {
  title: string;
  onClick?: ()=>void;
  style?: any;
  buttonColor? : any;
  titleColor? : any;
  buttonStyle? : any;
  textStyle? : any;
  iconName? : any;
  iconImage? : any;
  iconColor? : any;
}

const CustomButton: React.FC<ButtonType> = ({title, buttonStyle,titleColor, buttonColor, textStyle,iconName, iconColor,iconImage, onClick=()=>{}, ...props}) => {
  return (
    <button
      // onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: buttonColor || COLORS.primary,
        ...buttonStyle,
      }}
      onClick={onClick}
    >
      {
        iconImage &&
        <Image src={iconImage} alt=""  height={20} width={20}  />
      }
      {
        iconName &&
        <FiPlusCircle  size={20} color={iconColor}  />
      } 
      <h3  style={{...styles.title, color: titleColor || COLORS.kwhite, ...textStyle}}>{title}</h3>
    </button>
  )
}

export default CustomButton

const styles = {
  container: {
    height: 48,
    width: '100%',
    display: 'flex',
    justifyContent:"center",
    alignItems: "center",
    borderRadius: SIZES.base,
    flexDirection: "row",
  },
  title: {
    color: COLORS.kwhite, 
    fontSize: 14, 
    fontWeight: "600"
  }
}