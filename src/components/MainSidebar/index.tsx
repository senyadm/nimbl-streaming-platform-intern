import { useEffect, useState } from 'react'
import styles from './MainSidebar.module.scss'
import Image from 'next/image'
import {
    hideMainSidebarTransition,
    hideMainVideoPlayerTransition,
} from '@/store/features/transitions/transitions'

import profileLogo from '../../assets/icons/profile.svg'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import previewImg from '../../assets/video/preview.svg'

import VideoPlayer from '../VideoPlayer'
import { Transition } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import useSound from 'use-sound'

const channels = [
    {
        id: 1,
        name: 'BlueWard2',
        subscribers: '100k',
        price: 134,
        total: 238,
        avatar: 'icons/avatar.svg',
    },
    {
        id: 2,
        name: 'Basmore',
        subscribers: '90k',
        price: 110,
        total: 200,
        avatar: 'community/com1-logo.svg',
    },
    {
        id: 3,
        name: 'Thebretway',
        subscribers: '78k',
        price: 92,
        total: 189,
        avatar: 'community/com2-logo.svg',
    },
    {
        id: 4,
        name: 'Harris',
        subscribers: '53k',
        price: 86,
        total: 167,
        avatar: 'community/com3-logo.svg',
    },
    {
        id: 5,
        name: 'Auronplay',
        subscribers: '48k',
        price: 74,
        total: 126,
        avatar: 'community/com4-logo.svg',
    },
    {
        id: 6,
        name: 'BentoBoi',
        subscribers: '51k',
        price: 76,
        total: 142,
        avatar: 'community/com5-logo.svg',
    },
    {
        id: 7,
        name: 'Hussain',
        subscribers: '30k',
        price: 59,
        total: 102,
        avatar: 'community/com6-logo.svg',
    },
]

const trendingVideo = [
    {
        id: 1,
        title: 'Talks about NFT videos that can change world',
        time: '13:13',
        poster: 'video/trending-video1.jpg',
    },
    {
        id: 2,
        title: 'How NFTs are shaking up the art world | DW',
        time: '55:14',
        poster: 'video/trending-video2.jpg',
    },
    {
        id: 3,
        title: 'Why are people collecting NFTs?',
        time: '40:21',
        poster: 'video/trending-video3.jpg',
    },
]

const videoGrid = [
    {
        id: 1,
        title: 'Gary Vee Explains How He Made $90 Million on NFTs & Why They’ll Change the World',
        channel: '@BlueWard2',
        price: 140,
        avatar: 'icons/avatar.svg',
        poster: 'icons/playlist-1.svg',
    },
    {
        id: 2,
        title: "No One Is Paying Attention To What's Really Going On With NFTs",
        channel: 'GarrisonF',
        price: 20,
        avatar: 'community/com2-logo.svg',
        poster: 'marketplace/chanel_logo.svg',
    },
    {
        id: 3,
        title: 'Bored Ape Yacht Club Creators Explain How Steph Curry & Bieber Got Their NFT & How BAYC is Worth $4B',
        channel: 'Johnny Vnice',
        price: 45,
        avatar: 'community/com3-logo.svg',
        poster: 'icons/video-path-clip.svg',
    },
    {
        id: 4,
        title: 'The Exploding Card Market',
        channel: 'Thunder Mary',
        price: 56,
        avatar: 'community/com4-logo.svg',
        poster: 'video-2.jpg',
    },
    {
        id: 5,
        title: 'Web3/Metaverse Chat With Mark Zuckerberg',
        channel: 'Gary Vee',
        price: 122,
        avatar: 'community/com5-logo.svg',
        poster: 'video-3.jpg',
    },
    {
        id: 6,
        title: 'If You Understand This Video About NFTs You Are in the Top 10% of People That Get It',
        channel: 'Impudent Jok',
        price: 12,
        avatar: 'community/com6-logo.svg',
        poster: 'video-4.jpg',
    },
    {
        id: 7,
        title: 'What You Need To Know About The NFT World',
        channel: 'Yellow Stone',
        price: 43,
        avatar: 'community/com7-logo.svg',
        poster: 'video-5.jpg',
    },
    {
        id: 8,
        title: 'Wolf of Wall Street Calls Out Crypto Scammers & Shares Leonardo DiCaprio Stories',
        channel: 'Mr Hawk',
        price: 78,
        avatar: 'community/com8-logo.svg',
        poster: 'video-6.jpg',
    },
    {
        id: 9,
        title: 'How NFTs are shaking up the art world | DW Documentary',
        channel: 'Manga',
        price: 212,
        avatar: 'community/com9-logo.svg',
        poster: 'video-7.jpg',
    },
    {
        id: 10,
        title: 'Why are people collecting NFTs? - 6 Minute English',
        channel: 'BBC English',
        price: 120,
        avatar: 'community/com24-logo.svg',
        poster: 'video-8.jpg',
    },
    {
        id: 11,
        title: 'The Ultimate NFT Course: Beginner to Advanced Buy Sell',
        channel: 'Hustlers Point',
        price: 13,
        avatar: 'community/com11-logo.svg',
        poster: 'video-9.jpg',
    },
    {
        id: 12,
        title: 'NFTs - SNL',
        channel: 'SNL',
        price: 278,
        avatar: 'community/com23-logo.svg',
        poster: 'video-10.jpg',
    },
    {
        id: 7,
        title: 'What You Need To Know About The NFT World',
        channel: 'Yellow Stone',
        price: 43,
        avatar: 'community/com7-logo.svg',
        poster: 'video-5.jpg',
    },
    {
        id: 7,
        title: 'What You Need To Know About The NFT World',
        channel: 'Yellow Stone',
        price: 43,
        avatar: 'community/com7-logo.svg',
        poster: 'video-5.jpg',
    },
    {
        id: 7,
        title: 'What You Need To Know About The NFT World',
        channel: 'Yellow Stone',
        price: 43,
        avatar: 'community/com7-logo.svg',
        poster: 'video-5.jpg',
    },
    {
        id: 7,
        title: 'What You Need To Know About The NFT World',
        channel: 'Yellow Stone',
        price: 43,
        avatar: 'community/com7-logo.svg',
        poster: 'video-5.jpg',
    },
]

const duration = 400
const duration1 = 400

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

const Sidebar = () => {
    const [showSubscribers, setShowSubscribers] = useState(false)
    const [activeChannelId, setActiveChannelId] = useState(0)
    const [isHeaderShow, setIsHeaderShow] = useState(true)
    const [isTrendingShow, setIsTrending] = useState(true)


const { isShowMainSidebar, isShowMainVideoPlayer } = useSelector(
        (store: RootState) => store.transitions
    )
    const soundUrl = '/sounds/ui-click.mp3'

    const [playOn] = useSound(
        soundUrl,
        { volume: 20 }
    );

    const dispatch = useDispatch()

    const toggleSubscribers = (id: number) => {
        if (showSubscribers) {
            return
        }

        setActiveChannelId(id)
        setShowSubscribers(true)
    }

    const getActiveChannel = () => {
        return channels.find((ch) => ch.id === activeChannelId)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsHeaderShow((oldState) => false)
            setTimeout(() => {
                dispatch(hideMainVideoPlayerTransition())
            }, duration)
        }, duration)

        setTimeout(() => {
            setIsTrending((oldState) => false)
            setTimeout(() => {
                dispatch(hideMainSidebarTransition())
            }, duration1)
        }, duration1)
    }, [])

    return (
        <div className={styles.sidebar}>
            {isShowMainVideoPlayer ? (
                <Transition timeout={duration} in={isHeaderShow}>
                    {(state) => (
                        <div
                            className={styles.sidebar_video}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        >
                            <div className={styles.sidebar_video_wrap}>
                                <VideoPlayer />
                            </div>
                        </div>
                    )}
                </Transition>
            ) : (
                <div className={styles.sidebar_video}>
                    <div className={styles.sidebar_video_wrap}>
                        <VideoPlayer />
                    </div>
                </div>
            )}
            {isShowMainSidebar ? (
            <Transition timeout={duration1} in={isHeaderShow}>
                { state  => (
                    <>
                        {showSubscribers === false ? (
                            <>
                                <div className={styles.sidebar_tabs} style={{ ...defaultStyle, ...transitionStyles[state] }}>
                                    <div className={`${styles.tab} ${styles.active}`} onClick={() => playOn()}>
                                        Top
                                    </div>
                                    <div className={styles.tab} onClick={() => playOn()}>Trending</div>
                                    <div className={styles.tab} onClick={() => playOn()}>Rising</div>
                                    <div className={styles.tab} onClick={() => playOn()}>Watching List</div>
                                </div>
                                <div className={styles.channels} style={{ ...defaultStyle, ...transitionStyles[state] }}>
                                    <div className={styles.sidebar_sort}>
                                        <div className={`${styles.sort} ${styles.byDate}`}>
                                            <div
                                                className={`${styles.sort} ${styles.byDate}`}
                                            >
                                                <div
                                                    className={`${styles.date} ${styles.active}`}
                                                >
                                                    1d
                                                </div>
                                                <div className={styles.date}>
                                                    1w
                                                </div>
                                                <div className={styles.date}>
                                                    1m
                                                </div>
                                                <div className={styles.date}>
                                                    1y
                                                </div>
                                                <div className={styles.date}>
                                                    All
                                                </div>
                                            </div>
                                            <div
                                                className={`${styles.sort} ${styles.byCategory}`}
                                            >
                                                <div>All Categories</div>
                                                <Image src={arrowDown} alt="" />
                                            </div>
                                            <div
                                                className={`${styles.sort} ${styles.all}`}
                                            >
                                                View All
                                            </div>
                                        </div>
                                        <div
                                            className={styles.sidebar_channels}
                                        >
                                            <table>
                                                <thead>
                                                    <tr className={styles.col}>
                                                        <th
                                                            className={
                                                                styles.col_1
                                                            }
                                                        >
                                                            Channels
                                                        </th>
                                                        <th
                                                            className={
                                                                styles.col_2
                                                            }
                                                        >
                                                            Subscribers
                                                        </th>
                                                        <th
                                                            className={
                                                                styles.col_3
                                                            }
                                                        >
                                                            Floor Price
                                                        </th>
                                                        <th
                                                            className={
                                                                styles.col_4
                                                            }
                                                        >
                                                            Total Volume
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {channels.map((item, idx) => (
                                                    <tbody key={idx}>
                                                        <tr
                                                            className={
                                                                styles.table_value
                                                            }
                                                            onClick={() =>
                                                                toggleSubscribers(
                                                                    item.id
                                                                )
                                                            }
                                                            key={item.id}
                                                        >
                                                            <td
                                                                className={
                                                                    styles.table_channel
                                                                }
                                                            >
                                                                <p
                                                                    className={
                                                                        styles.id
                                                                    }
                                                                >
                                                                    {idx + 1}
                                                                </p>
                                                                <Image
                                                                    className={
                                                                        styles.img
                                                                    }
                                                                    src={
                                                                        profileLogo
                                                                    }
                                                                    alt="profile"
                                                                />
                                                                <p
                                                                    className={
                                                                        styles.name
                                                                    }
                                                                >
                                                                    @{item.name}
                                                                </p>
                                                            </td>
                                                            <td
                                                                className={
                                                                    styles.table_subs
                                                                }
                                                            >
                                                                {
                                                                    item.subscribers
                                                                }
                                                            </td>
                                                            <td
                                                                className={`${styles.table_floor} ${styles.gradient_number}`}
                                                            >
                                                                {item.price}{' '}
                                                                NMBL
                                                            </td>
                                                            <td
                                                                className={`${styles.table_floor} ${styles.gradient_number}`}
                                                            >
                                                                {item.total}{' '}
                                                                NMBL
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>
                                        </div>
                                    </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.channels}>
                                        <div className={styles.subs_header}>
                                            <div
                                                className={
                                                    styles.subs_header_head
                                                }
                                            >
                                                <div
                                                    className={styles.back_btn}
                                                    onClick={() =>
                                                        setShowSubscribers(
                                                            false
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={arrowLeft}
                                                        alt="back"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.subs_titles
                                                    }
                                                >
                                                    <Image
                                                        src={profileLogo}
                                                        alt=""
                                                    />
                                                    <div
                                                        className={
                                                            styles.subs_title
                                                        }
                                                    >
                                                        @{getActiveChannel.name}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={styles.go_to_channel}
                                            >
                                                Go to channel
                                            </div>
                                        </div>
                                        <div className={styles.about_channel}>
                                            <div
                                                className={
                                                    styles.about_channel_box
                                                }
                                            >
                                                <div className={styles.value}>
                                                    {100000}
                                                </div>
                                                <div className={styles.key}>
                                                    Members
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.about_channel_box
                                                }
                                            >
                                                <div className={styles.value}>
                                                    {100000}
                                                </div>
                                                <div className={styles.key}>
                                                    Views
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.about_channel_box
                                                }
                                            >
                                                <div className={styles.value}>
                                                    {100000}
                                                </div>
                                                <div className={styles.key}>
                                                    Shares
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.about_channel_box
                                                }
                                            >
                                                <div className={styles.value}>
                                                    {100}
                                                </div>
                                                <div className={styles.key}>
                                                    Floor Price
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.about_channel_box
                                                }
                                            >
                                                <div className={styles.value}>
                                                    {150}
                                                </div>
                                                <div className={styles.key}>
                                                    Volume
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.about_channel_box
                                                }
                                            >
                                                <div className={styles.value}>
                                                    {500}
                                                </div>
                                                <div className={styles.key}>
                                                    Listings
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.subs_videos}>
                                            <div
                                                className={
                                                    styles.subs_videos_header
                                                }
                                            >
                                                Trending Videos
                                            </div>
                                            <div
                                                className={
                                                    styles.subs_videos_video
                                                }
                                            >
                                                {trendingVideo.map((item) => (
                                                    <div
                                                        className={
                                                            styles.subs_videos_box
                                                        }
                                                        key={item.id}
                                                    >
                                                        <div
                                                            className={
                                                                styles.subs_videos_main
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles.subs_img
                                                                }
                                                            >
                                                                <Image
                                                                    style={{
                                                                        objectFit:
                                                                            'cover',
                                                                    }}
                                                                    src={
                                                                        previewImg
                                                                    }
                                                                    alt=""
                                                                />
                                                                <div
                                                                    className={
                                                                        styles.videos_timeline
                                                                    }
                                                                >
                                                                    {item.time}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.subs_videos_names
                                                            }
                                                        >
                                                            {item.title}{' '}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </Transition>
            ) : (
                <>
                    {showSubscribers === false ? (
                        <>
                            <div className={styles.sidebar_tabs}>
                                <div
                                    className={`${styles.tab} ${styles.active}`}
                                >
                                    Top
                                </div>
                                <div className={styles.tab}>Trending</div>
                                <div className={styles.tab}>Rising</div>
                                <div className={styles.tab}>Watching List</div>
                            </div>
                            <div className={styles.channels}>
                                <div className={styles.sidebar_sort}>
                                    <div
                                        className={`${styles.sort} ${styles.byDate}`}
                                    >
                                        <div
                                            className={`${styles.date} ${styles.active}`}
                                        >
                                            1d
                                        </div>
                                        <div className={styles.date}>1w</div>
                                        <div className={styles.date}>1m</div>
                                        <div className={styles.date}>1y</div>
                                        <div className={styles.date}>All</div>
                                    </div>
                                    <div
                                        className={`${styles.sort} ${styles.byCategory}`}
                                    >
                                        <div>All Categories</div>
                                        <Image src={arrowDown} alt="" />
                                    </div>
                                    <div
                                        className={`${styles.sort} ${styles.all}`}
                                    >
                                        View All
                                    </div>
                                </div>
                                <div className={styles.sidebar_channels}>
                                    <table>
                                        <thead>
                                            <tr className={styles.col}>
                                                <th className={styles.col_1}>
                                                    Channels
                                                </th>
                                                <th className={styles.col_2}>
                                                    Subscribers
                                                </th>
                                                <th className={styles.col_3}>
                                                    Floor Price
                                                </th>
                                                <th className={styles.col_4}>
                                                    Total Volume
                                                </th>
                                            </tr>
                                        </thead>
                                        {channels.map((item, idx) => (
                                            <tbody key={idx}>
                                                <tr
                                                    className={
                                                        styles.table_value
                                                    }
                                                    onClick={() =>
                                                        toggleSubscribers(
                                                            item.id
                                                        )
                                                    }
                                                    key={item.id}
                                                >
                                                    <td
                                                        className={
                                                            styles.table_channel
                                                        }
                                                    >
                                                        <p
                                                            className={
                                                                styles.id
                                                            }
                                                        >
                                                            {idx + 1}
                                                        </p>
                                                        <Image
                                                            className={
                                                                styles.img
                                                            }
                                                            src={profileLogo}
                                                            alt="profile"
                                                        />
                                                        <p
                                                            className={
                                                                styles.name
                                                            }
                                                        >
                                                            @{item.name}
                                                        </p>
                                                    </td>
                                                    <td
                                                        className={
                                                            styles.table_subs
                                                        }
                                                    >
                                                        {item.subscribers}
                                                    </td>
                                                    <td
                                                        className={`${styles.table_floor} ${styles.gradient_number}`}
                                                    >
                                                        {item.price} NMBL
                                                    </td>
                                                    <td
                                                        className={`${styles.table_floor} ${styles.gradient_number}`}
                                                    >
                                                        {item.total} NMBL
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.channels}>
                                <div className={styles.subs_header}>
                                    <div className={styles.subs_header_head}>
                                        <div
                                            className={styles.back_btn}
                                            onClick={() =>
                                                setShowSubscribers(false)
                                            }
                                        >
                                            <Image src={arrowLeft} alt="back" />
                                        </div>
                                        <div className={styles.subs_titles}>
                                            <Image src={profileLogo} alt="" />
                                            <div className={styles.subs_title}>
                                                @{getActiveChannel.name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.go_to_channel}>
                                        Go to channel
                                    </div>
                                </div>
                                <div className={styles.about_channel}>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100000}
                                        </div>
                                        <div className={styles.key}>
                                            Members
                                        </div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100000}
                                        </div>
                                        <div className={styles.key}>Views</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100000}
                                        </div>
                                        <div className={styles.key}>Shares</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {100}
                                        </div>
                                        <div className={styles.key}>
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {150}
                                        </div>
                                        <div className={styles.key}>Volume</div>
                                    </div>
                                    <div className={styles.about_channel_box}>
                                        <div className={styles.value}>
                                            {500}
                                        </div>
                                        <div className={styles.key}>
                                            Listings
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.subs_videos}>
                                    <div className={styles.subs_videos_header}>
                                        Trending Videos
                                    </div>
                                    <div className={styles.subs_videos_video}>
                                        {trendingVideo.map((item) => (
                                            <div
                                                className={
                                                    styles.subs_videos_box
                                                }
                                                key={item.id}
                                            >
                                                <div
                                                    className={
                                                        styles.subs_videos_main
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.subs_img
                                                        }
                                                    >
                                                        <Image
                                                            style={{
                                                                objectFit:
                                                                    'cover',
                                                            }}
                                                            src={previewImg}
                                                            alt=""
                                                        />
                                                        <div
                                                            className={
                                                                styles.videos_timeline
                                                            }
                                                        >
                                                            {item.time}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        styles.subs_videos_names
                                                    }
                                                >
                                                    {item.title}{' '}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Sidebar
