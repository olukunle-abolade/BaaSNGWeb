"use client"

import MenuItem from "../MenuItem";


export default function MenuItemsList({ options }: {options: any}) {
  return (
    <div>
      {options && options?.map((option: any) => (
          <MenuItem menuItem={option} key={option.id} />
      ))}
    </div>
  );
}