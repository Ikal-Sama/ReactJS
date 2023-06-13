import { HiViewGrid, HiCube,
    HiShoppingCart, HiUserGroup,
    HiArchive, HiOutlineCog,
    HiOutlineQuestionMarkCircle } from "react-icons/hi";


export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiCube />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiShoppingCart />
    },
    {
        key: 'costumer',
        label: 'Customer',
        path: '/costumer',
        icon: <HiUserGroup />
    },
    {
        key: 'inventory',
        label: 'Inventory',
        path: '/inventory',
        icon: <HiArchive />
    }
];

export const DASHBOARD_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/helpsupport',
        icon: <HiOutlineQuestionMarkCircle />
    }
];