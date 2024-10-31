import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Sidebar from '@/components/MainSidebar'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import VideoCard from '@/components/VideoCard'
import withAuthorization from '@/HOC/Authorization/Authorization'
import { useRouter } from 'next/router'
import { UseShoppingCart } from '@/context/AuthContext'
import { useEffect, useRef, useState } from 'react'
import { videoCardType } from '@/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Transition } from 'react-transition-group'
import Layout from '@/components/Layout'
import {
    hideFirstRender,
    hideMainVideosTransition,
    hideRecomendationDropdownTransition,
} from '@/store/features/transitions/transitions'


function Home() {
    const router = useRouter()
    const { isAuth } = UseShoppingCart()
    const data = useSelector((store: RootState) => store.videos.videos)
    const [videos, setVideos] = useState<videoCardType[] | null>(data)

    const dispatch = useDispatch()

    const { isShowMainVideos, isShowRecomendationDropdown, isFirstRender } =
        useSelector((store: RootState) => store.transitions)


    useEffect(() => {
        if (!isAuth) {
            router.push('/login')
        }
    }, [])

    const duration = 1200
    const duration1 = 2000

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }
    const defaultStyle1 = {
        transition: `opacity ${duration1}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles: any = {
        entering: { opacity: 0 },
        entered: { opacity: 0 },
        exiting: { opacity: 1 },
        exited: { opacity: 1 },
    }

    const [isHeaderShow, setIsHeaderShow] = useState(true)
    const [isVideoShow, setIsVideoShow] = useState(true)

    useEffect(() => {
        if (isFirstRender) {
            dispatch(hideFirstRender())
            return
        }

        setTimeout(() => {
            setIsHeaderShow((oldState) => false)
            setTimeout(() => {
                dispatch(hideRecomendationDropdownTransition())
            }, duration)
        }, duration)

        setTimeout(() => {
            setIsVideoShow((oldState) => false)
            setTimeout(() => {
                dispatch(hideMainVideosTransition())
            }, duration1)
        }, duration1)
    }, [])

    return isAuth ? (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Sidebar />

                <div className={styles.content}>
                    {isShowRecomendationDropdown ? (
                        <Transition timeout={duration} in={isHeaderShow}>
                            {(state) => (
                                <div
                                    className={styles.dropdowns}
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state],
                                    }}
                                >
                                    <RecomendationDropdown />
                                    <RecomendationDropdown />
                                    <RecomendationDropdown />
                                    <RecomendationDropdown />
                                </div>
                            )}
                        </Transition>
                    ) : (
                        <div className={styles.dropdowns}>
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                            <RecomendationDropdown />
                        </div>
                    )}

                    {isShowMainVideos ? (
                        <Transition timeout={duration1} in={isVideoShow}>
                            {(state) => (
                                <div
                                    className={styles.content__videos}
                                    style={{
                                        ...defaultStyle1,
                                        ...transitionStyles[state],
                                    }}
                                >
                                    {videos?.map((item, index) => (
                                        <VideoCard key={index} {...item} />
                                    ))}
                                </div>
                            )}
                        </Transition>
                    ) : (
                        <div className={styles.content__videos}>
                            {videos?.map((item, index) => (
                                <VideoCard key={index} {...item} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    ) : null
}

export default withAuthorization(Home)