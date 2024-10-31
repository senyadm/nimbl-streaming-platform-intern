import style from '@/styles/VideoPage.module.scss'
import Image from 'next/image'

import { iconTwitter, iconYoutube, iconTwitch } from '@/assets/social-icons'
import {
    handsHoldingDiamond,
    likeSolid,
    bookmark,
    partyHorn,
    share,
    commentsSolid,
    podcast,
    trade,
} from '@/assets/icons'
import Link from 'next/link'
import VideoList from '@/components/VideosList'
import { useState } from 'react'
import withAuthorization from '@/HOC/Authorization/Authorization'

function VideoPage() {
    const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0)
    return (
        <div className={style.videoPage__main}>
            <div className={style.videoPage__content}>
                <div className={style.video_player}>
                    <Image fill src="/fakeImg/video-1.jpg" alt="twitter" />
                </div>
                <div className={style.video_data}>
                    <h1 className={style.title}>
                        IGNORE THE FUD Binance CZ | AAVE Freezes Lending Markets
                        | Polygon Solana NFT
                    </h1>
                    <div className={style.video_data__row}>
                        <div className={style.hashtag__list}>
                            <span className={style.hashtag__item}>
                                #ETH-NFT
                            </span>
                            <span className={style.hashtag__item}>
                                #NFT-Trading
                            </span>
                            <span className={style.hashtag__item}>
                                #Discord-Tips
                            </span>
                        </div>
                        <div className={style.info_data__list}>
                            <span className={style.info_data__item}>
                                100k views
                            </span>
                            <span className={style.info_data__item}>
                                4 hours ago
                            </span>
                        </div>
                        <div className={style.social__list}>
                            <div className={style.social__item}>
                                <Image
                                    width={21}
                                    height={21}
                                    src={iconTwitter}
                                    alt="twitter"
                                />
                            </div>
                            <div className={style.social__item}>
                                <Image
                                    width={21}
                                    height={21}
                                    src={iconTwitch}
                                    alt="twitch"
                                />
                            </div>
                            <div className={style.social__item}>
                                <Image
                                    width={21}
                                    height={21}
                                    src={iconYoutube}
                                    alt="Youtube"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.video_data__row}>
                        <div className={style.video_stat__table}>
                            <div className={style.video_stat__cell}>
                                <Image
                                    width={21}
                                    height={21}
                                    src={likeSolid}
                                    alt="like"
                                />
                                <span>5 324</span>
                            </div>
                            <div className={style.video_stat__cell}>
                                <Image
                                    width={21}
                                    height={21}
                                    src={partyHorn}
                                    alt="partyHorn"
                                />
                                <span>1 122</span>
                            </div>
                            <div className={style.video_stat__cell}>
                                <Image
                                    width={21}
                                    height={21}
                                    src={handsHoldingDiamond}
                                    alt="handsHoldingDiamond"
                                />
                                <span>12 122</span>
                            </div>
                        </div>
                        <div className={style.action_btn__table}>
                            <div className={style.action_btn__cell}>
                                <Image
                                    width={20}
                                    height={20}
                                    src={bookmark}
                                    alt="bookmark"
                                />
                                <span>Save</span>
                            </div>
                            <div className={style.action_btn__cell}>
                                <Image
                                    width={20}
                                    height={20}
                                    src={share}
                                    alt="share"
                                />
                                <span>Share</span>
                            </div>
                        </div>
                        <div className={style.action_btn__list}>
                            <button className={style.btn_subscribe}>
                                subscribe
                            </button>
                            <Link href="/channel/8">
                                <button className={style.btn_link}>
                                    go to channel
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.videoPage__sidebar}>
                <div className={style.sidebar_tabs__list}>
                    <div
                        className={`${style.sidebar_tab__item} ${
                            activeTab === 0 && style.active
                        }`}
                        onClick={() => setActiveTab(0)}
                    >
                        <Image
                            width={22}
                            height={22}
                            src={podcast}
                            alt="Video"
                        />
                        <span>Videos</span>
                    </div>
                    <div
                        className={`${style.sidebar_tab__item} ${
                            activeTab === 1 && style.active
                        }`}
                        onClick={() => setActiveTab(1)}
                    >
                        <Image
                            width={22}
                            height={22}
                            src={commentsSolid}
                            alt="commentsSolid"
                        />
                        <span>Comments</span>
                    </div>
                    <div
                        className={`${style.sidebar_tab__item} ${
                            activeTab === 2 && style.active
                        }`}
                        onClick={() => setActiveTab(2)}
                    >
                        <Image width={22} height={22} src={trade} alt="trade" />
                        <span>Trade</span>
                    </div>
                </div>
                <div className={style.sidebar__content}>
                    {' '}
                    <VideoList />
                </div>
            </div>
        </div>
    )
}

export default withAuthorization(VideoPage)
