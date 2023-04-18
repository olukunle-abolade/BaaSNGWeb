"use client"

import React from 'react'
import {useRouter} from "next/router"
import Link from "next/link"
import PropTypes from "prop-types"

export const SidebarNav = ({items}: {items:any}) => {
  const {pathname} = useRouter();

  const navLink = (name?: string | undefined, icon?: any, badge?: string | undefined) => {
    return (
      <div>
        <span>{icon && icon}</span>
        <p>{name && name}</p>
        {
          badge ? (
            "badge"
          ) : ""
        }
      </div>
    )
  }

  interface INavItem {
    item: string;
    index: string;
    items: string;
    to: string;
    component: any;
    name?: string;
    badge?: string;
    icon?:any
  }

  const navItem: React.FC<INavItem> = (item, index) => {

    const {component, name, badge, icon, ...rest } = item;
    const Component = component

    return (
      <Component
        {...(rest.to && !rest.items && {component: Link})}
        // key = {index}
        {...rest}
        style = {{
          display: "flex"
        }}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  interface INavGroup {
    item: string;
    index: string;
    items: any;
    to: string;
    component: any;
    name?: string;
    badge: string;
    icon?:any
  }
  const navGroup: React.FC<INavGroup> = (item, index) => {
    const {component, name, icon, to, ...rest} = item
    const Component = component

    return (
      <Component
        idx = {String(index)}
        key = {index}
        toggler = {navLink(name, icon)}
        visibile = {pathname.startsWith(to)}
        {...rest}
        style = {{
          display: "flex",
          alignItems: "center",
        }}
      >
        {
          item.items?.map((item: any, index: any) => 
            item.items ? navGroup(item, index) : navItem(item, index),
          )
        }
      </Component>
    )
  }
  return (
    <>
        {
            items && items.map((item: any, index: any) => (item.items ? navGroup(item, index) : navItem(item, index)))
        }
    </>
  )
}

SidebarNav.prototype = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  exact: PropTypes.bool
}