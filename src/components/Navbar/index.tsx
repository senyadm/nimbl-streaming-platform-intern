import Image from 'next/image'
import {
    setMarketActive,
    setNavbarActive,
} from '@/store/features/navbar/navbarSlice'
import { RootState } from '@/store/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Navbar.module.scss'

import contentIcon from '../../assets/icons/nav-content.png'
import communityIcon from '../../assets/icons/nav-community.png'
import marketplaceIcon from '../../assets/icons/nav-marketplace.png'
import settingsIcon from '../../assets/icons/nav-settings.png'

import rankingsIcon from '../../assets/icons/nav-rankings.png'
import launchpadIcon from '../../assets/icons/nav-launchpad.png'
import opportunitiesIcon from '../../assets/icons/nav-opportunities.png'
import gainersIcon from '../../assets/icons/nav-gainers.png'

const navMainIconsPaths = [
    contentIcon,
    communityIcon,
    marketplaceIcon,
    settingsIcon,
]
const navMarketplaceIconsPaths = [
    rankingsIcon,
    launchpadIcon,
    opportunitiesIcon,
    gainersIcon,
]

const Navbar= ({...rest}) => {
    const dispatch = useDispatch()
    const { navbarItems, marketPlaceNavbar } = useSelector(
        (store: RootState) => store.navbar
    )
    const router = useRouter()
    const currentPath = router.asPath
    let navItems = navbarItems
    if (currentPath.startsWith('/marketplace')) {
        navItems = marketPlaceNavbar
    }
    return (
        <ul className={styles.navbar} {...rest}>
            {navItems.map((item, index) => {
                const { id, name, link, isActive } = item
                return (
                    <Link
                        href={link}
                        key={id}
                        onClick={() => {
                            if (currentPath.startsWith('/marketplace')) {
                                dispatch(setMarketActive(id))
                            } else if (id === 3) {
                                dispatch(setMarketActive(1))
                            } else {
                                dispatch(setNavbarActive(id))
                            }
                        }}
                    >
                        <li className={isActive ? styles.active : ''}>
                            <Image
                                src={
                                    !currentPath.startsWith('/marketplace')
                                        ? navMainIconsPaths[index]
                                        : navMarketplaceIconsPaths[index]
                                }
                                alt="icon"
                            />
                            <span>{name}</span>
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default Navbar
