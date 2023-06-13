"use client"

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import MenuItemsList from "../MenuItemsList";
import ExpandIcon from "../ExpandIcon";
import { MenuItemContainer } from "./styles";

interface IMenuItem {
  menuItem: any;
  name?: string;
  icon?: any;
  url?: string;
  depth?: any;
  subItems?:any
}

const MenuItem = ({menuItem: { name, icon: Icon, url, depth, subItems }}: IMenuItem) => {
  const [isExpanded, toggleExpanded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  // const selected = router.aspather === url
  const selected = pathname === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <div>
      <MenuItemContainer className={selected ? "selected" : ""} depth={depth} >
        {
          url ?  
          <Link href={url}  className="block">
            <div className="menu-item">
              {Icon ? <Icon className="icon text-xl text-kblack2 "/> : ""}
              <span className="">{name}</span>
            </div>
          </Link>

          :

          <div onClick = {onClick} className="menu-item">
            {Icon ? <Icon className="text-xl text-kblack2  "/> : ""}
            <span className="text-kblack2 hover:opacity-100 -ml-1">{name}</span>
          </div>

        }
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded}  />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </div>
  );
}

export default MenuItem
