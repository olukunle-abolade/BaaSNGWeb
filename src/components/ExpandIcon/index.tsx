"use client"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function ExpandIcon({
  isExpanded,
  handleClick,
}: {isExpanded: any, handleClick: any}) {
  return isExpanded ? (
    <IoIosArrowUp onClick={handleClick} />
  ) : (
    <IoIosArrowDown onClick={handleClick} />
  );
}