import AreaChart from '@/components/Chart/AreaChart'
// import ProgressChart from '@/components/Chart/ProgressChart'
import NFTCard from '@/components/NFTCard'
import VideoCard from '@/components/VideoCard'
import Image from 'next/image'
import logo from '@/assets/user3.png'
import React, { useState } from 'react'
import styles from '../../../styles/ChannelPage.module.scss'
import Announcement from '@/components/Announcement'
// import ChartAreaContent from '@/components/ChannelContent/ChartAreaContent'
// import ChartTradingContent from '@/components/ChannelContent/ChartTradingContent'
// import { it } from 'node:test'
import CandlestickChart from '@/components/Chart/CandlestickChart'
import { useSelector } from 'react-redux'
import { videoCardType } from '@/types'
import { RootState } from '@/store/store'
import Layout from '@/components/Layout'

const announcements = [
    {
        id: 1,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 2,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 3,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 4,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
    {
        id: 5,
        img: logo,
        name: '@BlueWard2',
        description:
            'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
        likes: 5,
        comments: 2345,
    },
]
const ChannelPage = () => {
    const [buttons, setButtons] = useState([
        { id: 1, name: 'Most Watched', isActive: true },
        { id: 2, name: 'Recent Videos', isActive: false },
        { id: 3, name: 'Playlist', isActive: false },
    ])
    const [leftButtons, setLeftbuttons] = useState([
        { id: 1, name: 'Content', isActive: true },
        { id: 2, name: 'NFT Stats', isActive: false },
    ])
    const [membersBox, setMembersBox] = useState([
        { id: 1, number: '100 132', name: 'Members' },
        { id: 2, number: '100 132', name: 'Members' },
        { id: 3, number: '100 132', name: 'Members' },
        { id: 4, number: '100 132', name: 'Members' },
        { id: 5, number: '100 132', name: 'Members' },
        { id: 6, number: '100 132', name: 'Members' },
    ])

    const data = useSelector((state: RootState) => state.videos.videos)
    const [videos, setVideos] = useState<videoCardType[] | null>(data)

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.left}>
                    <video
                        src=""
                        className={styles.video}
                        poster="https://chambo015.github.io/nimble-dist/assets/video-1.caf0ce7d.jpg"
                    ></video>
                    <div className={styles.infoButtons}>
                        {leftButtons.map((item) => {
                            const { id, name, isActive } = item
                            return (
                                <button
                                    key={id}
                                    className={isActive ? styles.active : ''}
                                    onClick={() => {
                                        const newButtons = leftButtons.map(
                                            (item) => {
                                                if (item.id !== id) {
                                                    return {
                                                        ...item,
                                                        isActive: false,
                                                    }
                                                } else {
                                                    return {
                                                        ...item,
                                                        isActive: true,
                                                    }
                                                }
                                            }
                                        )
                                        setLeftbuttons(newButtons)
                                    }}
                                >
                                    {name}
                                </button>
                            )
                        })}
                    </div>
                    {leftButtons[0].isActive && (
                        <div className={styles.content}>
                            <div className={styles.profile}>
                                <div className={styles.profileImage}>
                                    <Image src={logo} alt={'logo'} />
                                </div>
                                <div className={styles.profileTitle}>
                                    <span className={styles.name}>@BlueWard2</span>
                                    <span className={styles.followers}>
                                    100M followers
                                </span>
                                </div>
                                <button className={styles.subscribeButton}>
                                    subscribed
                                </button>
                                <div className={styles.profileAnnouncement}>
                                    <div className={styles.bell}></div>
                                </div>
                            </div>
                            <div className={styles.description}>
                                Users who connect their crypto wallet are able to
                                purchase NFTs and set them as their profile picture
                                which will be displayed in a special hexagonal
                                shape.
                            </div>
                            <div className={styles.additionalInfo}>
                                <div className={styles.location}>New-York, USA</div>
                                <div className={styles.time}>
                                    Joined September 1, 2022
                                </div>
                            </div>
                            <button className={styles.levelButton}>
                                Level 14 creator
                            </button>
                            <article className={styles.announcements}>
                                <p className={styles.title}>Announcements</p>

                                {announcements.map((item) => {
                                    return <Announcement {...item} key={item.id} />
                                })}
                            </article>
                        </div>
                    )}
                    {leftButtons[1].isActive && (
                        <div className={styles.content}>
                            <div className={styles.buttonsSection}>
                                <button className={styles.active}>Buy NFT</button>
                                <button>Token Utility</button>
                            </div>
                            <div className={styles.cardSection}>
                                <div className={styles.card}>
                                    <NFTCard />
                                </div>
                                <div className={styles.card}>
                                    <NFTCard />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.right}>
                    {leftButtons[0].isActive && (
                        <>
                            <header className={styles.headerButtons}>
                                {buttons.map((item) => {
                                    const { id, name, isActive } = item
                                    return (
                                        <button
                                            className={
                                                isActive ? styles.active : ''
                                            }
                                            key={id}
                                            onClick={() => {
                                                const newArr = buttons.map(
                                                    (item) => {
                                                        if (item.id !== id)
                                                            return {
                                                                ...item,
                                                                isActive: false,
                                                            }
                                                        else
                                                            return {
                                                                ...item,
                                                                isActive: true,
                                                            }
                                                    }
                                                )
                                                setButtons(newArr)
                                            }}
                                        >
                                            {name}
                                        </button>
                                    )
                                })}
                            </header>
                            <main className={styles.rightMain}>
                                <article className={styles.videosSection}>
                                    {videos?.map((item, index) => (
                                        <VideoCard key={index} {...item} />
                                    ))}
                                </article>
                                <article className={styles.statistics}>
                                    <div className={styles.statisticsLeft}>
                                        {membersBox.map((item) => {
                                            const { id, number, name } = item
                                            return (
                                                <section
                                                    className={styles.item}
                                                    key={id}
                                                >
                                                    <h2>{number}</h2>
                                                    <p>{name}</p>
                                                </section>
                                            )
                                        })}
                                    </div>
                                    <div className={styles.statisticsRight}>
                                        <AreaChart
                                            height={'100%'}
                                            width={'100%'}
                                            range={'ALL'}
                                        />
                                    </div>
                                </article>
                            </main>
                        </>
                    )}
                    {leftButtons[1].isActive && (
                        <div className={styles.nftMain}>
                            <div className={styles.graphContainer}>
                                <div className={styles.profile}>
                                    <div className={styles.profileImage}>
                                        <Image src={logo} alt={'hero'} />
                                    </div>
                                    <div className={styles.profileTitle}>
                                    <span className={styles.name}>
                                        @BlueWard2
                                    </span>
                                        <span className={styles.followers}>
                                        100M followers
                                    </span>
                                    </div>
                                    <section>
                                        <div className={styles.item}>
                                            <h2>100 132</h2>
                                            <p>Members</p>
                                        </div>
                                        <div className={styles.item}>
                                            <h2>100 132</h2>
                                            <p>Members</p>
                                        </div>
                                        <div className={styles.item}>
                                            <h2>100 132</h2>
                                            <p>Members</p>
                                        </div>
                                        <div className={styles.item}>
                                            <h2>100 132</h2>
                                            <p>Members</p>
                                        </div>
                                        <div className={styles.item}>
                                            <h2>100 132</h2>
                                            <p>Members</p>
                                        </div>
                                    </section>
                                </div>
                                <div className={styles.tradeGraph}>
                                    <CandlestickChart
                                        height={'100%'}
                                        width={'100%'}
                                        range={'ALL'}
                                    />
                                </div>
                            </div>

                            <div className={styles.activitiesSection}>
                                <div className={styles.title}>
                                    Recent activities
                                </div>
                                <div className={styles.activities}>
                                    <div className={styles.singleActivity}>
                                        <div className={styles.activityItem}>
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.01776 15.9614L12.5662 26.4402C13.4017 27.3134 14.3765 27.75 15.4904 27.75C16.4851 27.75 17.3405 27.4771 18.0566 26.9313L26.3518 20.5458C27.1475 19.8909 27.6051 19.0723 27.7244 18.0899C27.8438 17.1803 27.5454 16.2888 26.8293 15.4156L17.2808 4.93683C16.2464 3.69975 14.8937 2.91748 13.2227 2.59002L4.92745 0.843561C4.13175 0.625253 3.37583 0.788984 2.65969 1.33475L1.64517 2.15341C1.04839 2.55364 0.75 3.20856 0.75 4.11818L1.22742 11.9227C1.42635 13.4872 2.02313 14.8335 3.01776 15.9614ZM4.45003 3.08122L4.61347 3.11726L12.8646 4.93683C13.7399 5.11876 14.6152 5.60995 15.4904 6.41041L25.0389 16.8892C25.3572 17.1803 25.4567 17.5077 25.3373 17.8716C25.3373 18.0899 25.1583 18.3991 24.8002 18.7994L16.505 25.1849C16.2265 25.4032 15.8883 25.5032 15.4904 25.4851C15.0926 25.4669 14.7942 25.3304 14.5953 25.0757L12.5662 22.849L5.04681 14.597C4.29089 13.7237 3.91293 12.8323 3.91293 11.9227L3.31615 3.89987L4.45003 3.08122ZM7.85167 6.9016C7.85167 7.22906 7.73232 7.50195 7.49361 7.72026C7.25489 7.93856 6.9565 8.04772 6.59844 8.04772C6.24037 8.04772 5.94198 7.93856 5.70327 7.72026C5.46456 7.50195 5.3452 7.22906 5.3452 6.9016C5.3452 6.57414 5.46456 6.30126 5.70327 6.08295C5.94198 5.86464 6.24037 5.75549 6.59844 5.75549C6.9565 5.75549 7.25489 5.86464 7.49361 6.08295C7.73232 6.30126 7.85167 6.57414 7.85167 6.9016Z"
                                                    fill="url(#paint0_linear_1_829)"
                                                />
                                                <path
                                                    d="M2.95714 2.25H5.78571L14.625 3.66176L25.2321 15.6618L27 17.7794L25.5857 19.1912L22.7571 22.0147L16.7464 25.8971L14.625 26.25L9.675 21.6618L2.95714 14.9559L2.25 4.01471L2.95714 2.25Z"
                                                    fill="url(#paint1_linear_1_829)"
                                                />
                                                <circle
                                                    cx="7.5"
                                                    cy="7.5"
                                                    r="3"
                                                    fill="black"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1_829"
                                                        x1="14.25"
                                                        y1="0.75"
                                                        x2="14.25"
                                                        y2="27.75"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#03C4CB" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#D90ADA"
                                                        />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint1_linear_1_829"
                                                        x1="14.625"
                                                        y1="2.25"
                                                        x2="14.625"
                                                        y2="26.25"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#03C4CB" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#D90ADA"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <p>Sales</p>
                                        </div>
                                        <div className={styles.activityItem}>
                                            0.051 ETH
                                        </div>
                                        <div className={styles.activityItem}>
                                            Bankless
                                        </div>
                                        <div className={styles.activityItem}>
                                            John
                                        </div>
                                        <div className={styles.activityItem}>
                                            1 hour ago
                                        </div>
                                    </div>
                                    <div className={styles.singleActivity}>
                                        <div className={styles.activityItem}>
                                            <svg
                                                width="29"
                                                height="30"
                                                viewBox="0 0 29 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M14.3048 0.0012207C10.5406 0.0012207 7.11063 1.24455 5.08146 2.26039C4.89813 2.35205 4.72729 2.44205 4.56813 2.52872C4.25313 2.70039 3.98479 2.86039 3.77146 3.00122L6.07979 6.39955L7.16646 6.83205C11.4131 8.97455 17.1081 8.97455 21.3556 6.83205L22.589 6.19205L24.7723 3.00122C24.32 2.70621 23.8496 2.43986 23.364 2.20372C21.3456 1.19872 17.9981 0.0012207 14.3048 0.0012207ZM8.93563 3.84789C8.11823 3.69493 7.3109 3.49233 6.51813 3.24122C8.41896 2.39705 11.2523 1.50122 14.304 1.50122C16.4181 1.50122 18.4173 1.93122 20.0706 2.47622C18.1331 2.74872 16.0656 3.21122 14.0956 3.78039C12.5456 4.22872 10.734 4.18039 8.93563 3.84789V3.84789ZM22.2356 8.06789L22.0315 8.17122C17.359 10.5279 11.1623 10.5279 6.48979 8.17122L6.29646 8.07289C-0.721874 15.7737 -6.08021 29.9987 14.3048 29.9987C34.6881 29.9987 29.199 15.5079 22.2356 8.06789ZM13.4381 15.0012C12.9961 15.0012 12.5722 15.1768 12.2596 15.4894C11.9471 15.8019 11.7715 16.2259 11.7715 16.6679C11.7715 17.1099 11.9471 17.5338 12.2596 17.8464C12.5722 18.159 12.9961 18.3346 13.4381 18.3346V15.0012ZM15.1048 13.3346V12.5012H13.4381V13.3346C12.5541 13.3346 11.7062 13.6857 11.0811 14.3109C10.456 14.936 10.1048 15.7838 10.1048 16.6679C10.1048 17.5519 10.456 18.3998 11.0811 19.0249C11.7062 19.65 12.5541 20.0012 13.4381 20.0012V23.3346C13.0934 23.3346 12.7572 23.2279 12.4757 23.0289C12.1943 22.83 11.9814 22.5487 11.8665 22.2237C11.7929 22.0153 11.6395 21.8447 11.4401 21.7493C11.2407 21.654 11.0115 21.6418 10.8031 21.7154C10.5947 21.789 10.4241 21.9424 10.3287 22.1418C10.2334 22.3412 10.2212 22.5703 10.2948 22.7787C10.5247 23.4287 10.9504 23.9914 11.5133 24.3895C12.0762 24.7875 12.7487 25.0012 13.4381 25.0012V25.8346H15.1048V25.0012C15.9888 25.0012 16.8367 24.65 17.4618 24.0249C18.0869 23.3998 18.4381 22.5519 18.4381 21.6679C18.4381 20.7838 18.0869 19.936 17.4618 19.3109C16.8367 18.6857 15.9888 18.3346 15.1048 18.3346V15.0012C15.8298 15.0012 16.4473 15.4637 16.6773 16.1121C16.7114 16.2181 16.7665 16.3163 16.8392 16.4007C16.9119 16.4851 17.0008 16.5541 17.1007 16.6036C17.2005 16.653 17.3093 16.682 17.4205 16.6887C17.5317 16.6954 17.6431 16.6797 17.7482 16.6426C17.8533 16.6055 17.9498 16.5476 18.0321 16.4726C18.1145 16.3975 18.1809 16.3066 18.2275 16.2054C18.2741 16.1042 18.3 15.9947 18.3035 15.8833C18.307 15.772 18.2882 15.661 18.2481 15.5571C18.0183 14.9071 17.5926 14.3443 17.0296 13.9463C16.4667 13.5483 15.7942 13.3346 15.1048 13.3346ZM15.1048 20.0012V23.3346C15.5468 23.3346 15.9707 23.159 16.2833 22.8464C16.5959 22.5338 16.7715 22.1099 16.7715 21.6679C16.7715 21.2259 16.5959 20.8019 16.2833 20.4894C15.9707 20.1768 15.5468 20.0012 15.1048 20.0012Z"
                                                    fill="url(#paint0_linear_1_835)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1_835"
                                                        x1="14.273"
                                                        y1="0.0012207"
                                                        x2="14.273"
                                                        y2="29.9987"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#03C4CB" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#D90ADA"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            <p>Mints</p>
                                        </div>
                                        <div className={styles.activityItem}>
                                            0.051 ETH
                                        </div>
                                        <div className={styles.activityItem}>
                                            Bankless
                                        </div>
                                        <div className={styles.activityItem}>
                                            John
                                        </div>
                                        <div className={styles.activityItem}>
                                            1 hour ago
                                        </div>
                                    </div>
                                    <div className={styles.singleActivity}>
                                        <div className={styles.activityItem}>
                                            <svg
                                                width="24"
                                                height="32"
                                                viewBox="0 0 24 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.17 2H3C2.20435 2 1.44129 2.31607 0.878679 2.87868C0.31607 3.44129 0 4.20435 0 5V29C0 29.7956 0.31607 30.5587 0.878679 31.1213C1.44129 31.6839 2.20435 32 3 32H21C21.7956 32 22.5587 31.6839 23.1213 31.1213C23.6839 30.5587 24 29.7956 24 29V5C24 4.20435 23.6839 3.44129 23.1213 2.87868C22.5587 2.31607 21.7956 2 21 2H17.83C17.6231 1.41484 17.2398 0.908257 16.733 0.550056C16.2261 0.191856 15.6207 -0.00032496 15 4.12473e-07H9C8.37935 -0.00032496 7.77387 0.191856 7.26702 0.550056C6.76016 0.908257 6.37688 1.41484 6.17 2V2ZM9 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3C16 3.26522 15.8946 3.51957 15.7071 3.70711C15.5196 3.89464 15.2652 4 15 4H9C8.73478 4 8.48043 3.89464 8.29289 3.70711C8.10536 3.51957 8 3.26522 8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2V2ZM10 13C10 12.7348 10.1054 12.4804 10.2929 12.2929C10.4804 12.1054 10.7348 12 11 12H18C18.2652 12 18.5196 12.1054 18.7071 12.2929C18.8946 12.4804 19 12.7348 19 13C19 13.2652 18.8946 13.5196 18.7071 13.7071C18.5196 13.8946 18.2652 14 18 14H11C10.7348 14 10.4804 13.8946 10.2929 13.7071C10.1054 13.5196 10 13.2652 10 13ZM10 19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H18C18.2652 18 18.5196 18.1054 18.7071 18.2929C18.8946 18.4804 19 18.7348 19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H11C10.7348 20 10.4804 19.8946 10.2929 19.7071C10.1054 19.5196 10 19.2652 10 19ZM10 25C10 24.7348 10.1054 24.4804 10.2929 24.2929C10.4804 24.1054 10.7348 24 11 24H18C18.2652 24 18.5196 24.1054 18.7071 24.2929C18.8946 24.4804 19 24.7348 19 25C19 25.2652 18.8946 25.5196 18.7071 25.7071C18.5196 25.8946 18.2652 26 18 26H11C10.7348 26 10.4804 25.8946 10.2929 25.7071C10.1054 25.5196 10 25.2652 10 25ZM8 13C8 13.3978 7.84196 13.7794 7.56066 14.0607C7.27936 14.342 6.89782 14.5 6.5 14.5C6.10218 14.5 5.72064 14.342 5.43934 14.0607C5.15804 13.7794 5 13.3978 5 13C5 12.6022 5.15804 12.2206 5.43934 11.9393C5.72064 11.658 6.10218 11.5 6.5 11.5C6.89782 11.5 7.27936 11.658 7.56066 11.9393C7.84196 12.2206 8 12.6022 8 13ZM8 19C8 19.3978 7.84196 19.7794 7.56066 20.0607C7.27936 20.342 6.89782 20.5 6.5 20.5C6.10218 20.5 5.72064 20.342 5.43934 20.0607C5.15804 19.7794 5 19.3978 5 19C5 18.6022 5.15804 18.2206 5.43934 17.9393C5.72064 17.658 6.10218 17.5 6.5 17.5C6.89782 17.5 7.27936 17.658 7.56066 17.9393C7.84196 18.2206 8 18.6022 8 19ZM6.5 26.5C6.10218 26.5 5.72064 26.342 5.43934 26.0607C5.15804 25.7794 5 25.3978 5 25C5 24.6022 5.15804 24.2206 5.43934 23.9393C5.72064 23.658 6.10218 23.5 6.5 23.5C6.89782 23.5 7.27936 23.658 7.56066 23.9393C7.84196 24.2206 8 24.6022 8 25C8 25.3978 7.84196 25.7794 7.56066 26.0607C7.27936 26.342 6.89782 26.5 6.5 26.5Z"
                                                    fill="url(#paint0_linear_1_838)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1_838"
                                                        x1="12"
                                                        y1="0"
                                                        x2="12"
                                                        y2="32"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#03C4CB" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#D90ADA"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            <p>Listing</p>
                                        </div>
                                        <div className={styles.activityItem}>
                                            0.051 ETH
                                        </div>
                                        <div className={styles.activityItem}>
                                            Bankless
                                        </div>
                                        <div className={styles.activityItem}>
                                            John
                                        </div>
                                        <div className={styles.activityItem}>
                                            1 hour ago
                                        </div>
                                    </div>
                                    <div className={styles.singleActivity}>
                                        <div className={styles.activityItem}>
                                            <svg
                                                width="24"
                                                height="32"
                                                viewBox="0 0 24 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6.17 2H3C2.20435 2 1.44129 2.31607 0.878679 2.87868C0.31607 3.44129 0 4.20435 0 5V29C0 29.7956 0.31607 30.5587 0.878679 31.1213C1.44129 31.6839 2.20435 32 3 32H21C21.7956 32 22.5587 31.6839 23.1213 31.1213C23.6839 30.5587 24 29.7956 24 29V5C24 4.20435 23.6839 3.44129 23.1213 2.87868C22.5587 2.31607 21.7956 2 21 2H17.83C17.6231 1.41484 17.2398 0.908257 16.733 0.550056C16.2261 0.191856 15.6207 -0.00032496 15 4.12473e-07H9C8.37935 -0.00032496 7.77387 0.191856 7.26702 0.550056C6.76016 0.908257 6.37688 1.41484 6.17 2V2ZM9 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3C16 3.26522 15.8946 3.51957 15.7071 3.70711C15.5196 3.89464 15.2652 4 15 4H9C8.73478 4 8.48043 3.89464 8.29289 3.70711C8.10536 3.51957 8 3.26522 8 3C8 2.73478 8.10536 2.48043 8.29289 2.29289C8.48043 2.10536 8.73478 2 9 2V2ZM10 13C10 12.7348 10.1054 12.4804 10.2929 12.2929C10.4804 12.1054 10.7348 12 11 12H18C18.2652 12 18.5196 12.1054 18.7071 12.2929C18.8946 12.4804 19 12.7348 19 13C19 13.2652 18.8946 13.5196 18.7071 13.7071C18.5196 13.8946 18.2652 14 18 14H11C10.7348 14 10.4804 13.8946 10.2929 13.7071C10.1054 13.5196 10 13.2652 10 13ZM10 19C10 18.7348 10.1054 18.4804 10.2929 18.2929C10.4804 18.1054 10.7348 18 11 18H18C18.2652 18 18.5196 18.1054 18.7071 18.2929C18.8946 18.4804 19 18.7348 19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H11C10.7348 20 10.4804 19.8946 10.2929 19.7071C10.1054 19.5196 10 19.2652 10 19ZM10 25C10 24.7348 10.1054 24.4804 10.2929 24.2929C10.4804 24.1054 10.7348 24 11 24H18C18.2652 24 18.5196 24.1054 18.7071 24.2929C18.8946 24.4804 19 24.7348 19 25C19 25.2652 18.8946 25.5196 18.7071 25.7071C18.5196 25.8946 18.2652 26 18 26H11C10.7348 26 10.4804 25.8946 10.2929 25.7071C10.1054 25.5196 10 25.2652 10 25ZM8 13C8 13.3978 7.84196 13.7794 7.56066 14.0607C7.27936 14.342 6.89782 14.5 6.5 14.5C6.10218 14.5 5.72064 14.342 5.43934 14.0607C5.15804 13.7794 5 13.3978 5 13C5 12.6022 5.15804 12.2206 5.43934 11.9393C5.72064 11.658 6.10218 11.5 6.5 11.5C6.89782 11.5 7.27936 11.658 7.56066 11.9393C7.84196 12.2206 8 12.6022 8 13ZM8 19C8 19.3978 7.84196 19.7794 7.56066 20.0607C7.27936 20.342 6.89782 20.5 6.5 20.5C6.10218 20.5 5.72064 20.342 5.43934 20.0607C5.15804 19.7794 5 19.3978 5 19C5 18.6022 5.15804 18.2206 5.43934 17.9393C5.72064 17.658 6.10218 17.5 6.5 17.5C6.89782 17.5 7.27936 17.658 7.56066 17.9393C7.84196 18.2206 8 18.6022 8 19ZM6.5 26.5C6.10218 26.5 5.72064 26.342 5.43934 26.0607C5.15804 25.7794 5 25.3978 5 25C5 24.6022 5.15804 24.2206 5.43934 23.9393C5.72064 23.658 6.10218 23.5 6.5 23.5C6.89782 23.5 7.27936 23.658 7.56066 23.9393C7.84196 24.2206 8 24.6022 8 25C8 25.3978 7.84196 25.7794 7.56066 26.0607C7.27936 26.342 6.89782 26.5 6.5 26.5Z"
                                                    fill="url(#paint0_linear_1_838)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1_838"
                                                        x1="12"
                                                        y1="0"
                                                        x2="12"
                                                        y2="32"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#03C4CB" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#D90ADA"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            <p>Sales</p>
                                        </div>
                                        <div className={styles.activityItem}>
                                            0.051 ETH
                                        </div>
                                        <div className={styles.activityItem}>
                                            Bankless
                                        </div>
                                        <div className={styles.activityItem}>
                                            John
                                        </div>
                                        <div className={styles.activityItem}>
                                            1 hour ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default ChannelPage
