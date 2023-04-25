'use client'

import { FC, ReactNode } from 'react'
import './badge.css'

interface IBadge {
 type: any;
 content: ReactNode;
}

const Badge: FC<IBadge> = ({type, content}) => {
  return (
    <div className={`badge badge-${type} ease-out duration-500 hover:scale-110`}>
      {content}
    </div>
  )
}

export default Badge