"use client"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


export default function ExpandIcon({
  isExpanded,
}: {isExpanded: boolean}) {
  return isExpanded ? (
    <IoIosArrowUp/>
  ) : (
    <IoIosArrowDown  />
  );
}