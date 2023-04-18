import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { BiTransfer, BiHomeCircle } from 'react-icons/bi';
import { VscCalendar } from 'react-icons/vsc';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { FaRegUserCircle, FaUserMinus } from 'react-icons/fa';
import { IoReceiptOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { RiBarChart2Fill } from 'react-icons/ri';
import { BsBarChartFill, BsCloudUploadFill } from 'react-icons/bs';
import { GiStabbedNote } from 'react-icons/gi';
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
    buttonFunc: () => {
      console.log('test');
    },
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
      url: "/",
  },
  {
    name: "Transactions",
    icon: BiTransfer,
    url: "#",
  }
];

export const specialists = [
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
  {
    image: '',
    name: 'David McHenry',
    position: 'Doctor',
    duty: ['surgery', 'General Care'],
  },
];

const MENU_OPTIONS2 = [
  {
    name: "ACCOUNT",
  },

  {
    name: "Administration",
    icon: VscCalendar,
    url: "#",
    subItems: [
    {
        name: "Hospitals",
        url: "/individual/hospital-list/hospital",
    },
    {
        name: "Eye Clinic",
        url: "#",
    },
    {
        name: "Dental",
        url: "#",
    },
    {
        name: "Diagnostics Centers",
        url: "#",
    },
    ],
  },
  {
      name: "Settings",
      icon: VscCalendar,
      url: "#",
  }
]

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


