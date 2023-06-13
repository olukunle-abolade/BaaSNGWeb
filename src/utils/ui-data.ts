import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { BiTransfer, BiHomeCircle } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import {FaUserCog} from 'react-icons/fa';
export const user_menu = [
  {
    icon: FiUser,
    content: 'Profile',
  },
  {
    icon: FiSettings,
    content: 'Settings',
  },
  {
    icon: FiLogOut,
    content: 'Logout',
    // buttonFunc: () => {
    //   console.log('test');
    // },
  },
];

export const appoint = [
  {
    name: 'Dr Kingsley Orile',
  },
];

export const notification = [
  {
    note: 'Dr. Kinsley Just approve you request',
  },
  {
    note: 'You will be having a section with Dr. K by 12:00',
  },
  {
    note: 'Thanks for choosing this platform',
  },
];

const MENU_OPTIONS = [
  {
      name: "GENERAL",
  },
  {
      name: "Dashboard",
      icon: MdDashboard,
      url: "/dashboard",
  },
  {
    name: "Transactions",
    icon: BiTransfer,
    url: "/dashboard/transactions"
  }
];


const MENU_OPTIONS2 = [
  {
    name: "ACCOUNT",
  },

  {
    name: "Administration",
    icon: FaUserCog,
    subItems: [
      {
          name: "Roles & Privileges",
          url: "/dashboard/administration",

      }
    ],
  },
  {
      name: "Settings",
      icon: IoMdSettings,
      url: "/dashboard/settings",
  }
]

// @ts-ignore
function makeMenuLevel(options: any[] | string, depth = 0) {
   if(Array.isArray(options)){
    return options.map((option: { subItems: string | any[]; }, idx: { toString: () => any; }) => ({
      ...option,
      id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
      depth,
      subItems:
        option.subItems && option.subItems.length > 0
          ? makeMenuLevel(option.subItems, depth + 1)
          : undefined,
    }));
  }
}

export const MENU_ITEMS = makeMenuLevel(MENU_OPTIONS);
export const MENU_ITEMS2 = makeMenuLevel(MENU_OPTIONS2);


