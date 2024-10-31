import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import { Transition } from 'react-transition-group'
import {
    hideHeaderTransition,
    hideNavbarTransition,
} from '@/store/features/transitions/transitions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

type LayoutProps = {
    children: ReactNode
}

const duration = 300

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 0 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const [isHeaderShow, setIsHeaderShow] = useState(true)

    const { isShowNavbar, isShowHeader } = useSelector(
        (store: RootState) => store.transitions
    )

    const dispatch = useDispatch()

    useEffect(() => {
        setIsHeaderShow((oldState) => false)
        setTimeout(() => {
            dispatch(hideHeaderTransition())
            dispatch(hideNavbarTransition())
        }, duration)
    }, [])

    const headerRef = useRef(null)

    return (
        <div className="layout">
            {isShowHeader ? (
                <Transition
                    timeout={duration}
                    nodeRef={headerRef}
                    in={isHeaderShow}
                >
                    {(state) => (
                        <>
                            <Header
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            />
                        </>
                    )}
                </Transition>
            ) : (
                <Header />
            )}

            <main className="content">{children}</main>

            {isShowNavbar ? (
                <Transition
                    timeout={duration}
                    nodeRef={headerRef}
                    in={isHeaderShow}
                >
                    {(state) => (
                        <>
                            <Navbar
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            />
                        </>
                    )}
                </Transition>
            ) : (
                <Navbar />
            )}
        </div>
    )
}

export default Layout
