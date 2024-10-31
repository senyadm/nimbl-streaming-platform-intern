import { navbarType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
export interface NavbarState {
    navbarItems: navbarType[]
    marketPlaceNavbar: navbarType[]
}
const initialState: NavbarState = {
    navbarItems: [
        { id: 1, name: 'Content', link: '/', isActive: true },
        { id: 2, name: 'Community', link: '/community', isActive: false },
        {
            id: 3,
            name: 'Marketplace',
            link: '/marketplace/rankings',
            isActive: false,
        },
        { id: 4, name: 'Settings', link: '/settings', isActive: false },
    ],
    marketPlaceNavbar: [
        {
            id: 1,
            name: 'Rankings',
            link: '/marketplace/rankings',
            isActive: true,
        },
        {
            id: 2,
            name: 'Launchpad',
            link: '/marketplace/launchpad',
            isActive: false,
        },
        {
            id: 3,
            name: 'Opportunities',
            link: '/marketplace/opportunities',
            isActive: false,
        },
        {
            id: 4,
            name: 'Gainers & Loosers',
            link: '/marketplace/gainers',
            isActive: false,
        },
    ],
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,

    reducers: {
        setNavbarActive: (state, { payload }) => {
            const newArr = state.navbarItems.map((item) => {
                if (item.id !== payload) return { ...item, isActive: false }
                else return { ...item, isActive: true }
            })
            state.navbarItems = newArr
        },
        setMarketActive: (state, { payload }) => {
            const newArr = state.marketPlaceNavbar.map((item) => {
                if (item.id !== payload) return { ...item, isActive: false }
                else return { ...item, isActive: true }
            })
            state.marketPlaceNavbar = newArr
        },
    },
})

export const { setNavbarActive, setMarketActive } = navbarSlice.actions

export default navbarSlice.reducer
