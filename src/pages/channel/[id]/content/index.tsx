import style from '@/styles/ChannelContent.module.scss'
import Image from 'next/image'
import SidebarFilter from '@/components/ChannelContent/SidebarFilter'
import SidebarCart from '@/components/ChannelContent/SidebarCart'
import NFTCard from '@/components/NFTCard'
import { useState } from 'react'
import ChartAreaContent from '@/components/ChannelContent/ChartAreaContent'
import ChartTradingContent from '@/components/ChannelContent/ChartTradingContent'

import avatar from '@/assets/channel-content/user-avatar.gif'
import iconShare from '@/assets/channel-content/icon-share.svg'
import iconDots from '@/assets/channel-content/icon-dots.svg'
import iconItems from '@/assets/channel-content/icon-items.svg'
import iconStats from '@/assets/channel-content/icon-stats.svg'
import iconReload from '@/assets/channel-content/icon-reload.svg'
import withAuthorization from '@/HOC/Authorization/Authorization'
import Layout from '@/components/Layout'

const ChannelContent = () => {
    const [showChart, setShowChart] = useState<boolean>(false)

    return (
        <Layout>
            <div className={style.page}>
                <div className={style.headerBg}></div>
                <div className={style.body}>
                    <div className={style.container}>
                        <div className={style.avatar}>
                            <Image
                                src={avatar}
                                width={160}
                                height={160}
                                alt="Avatar"
                                style={{
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                }}
                            />
                        </div>
                        <div>
                            <h2 className={style.hero_title}>DandelionWist</h2>
                            <p className={style.hero_desc}>
                                A collection of 10,000 zombies evolving through the
                                sweet juicy brains their owners decide to feed them.
                                Zombies are cute yet they d crack your skull open
                                and jam a straw through your cortex to sip on that
                                sweet white matter.
                            </p>
                        </div>
                        <div className={style.hero_stats}>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>41 NMBL</span>
                                <span className={style.key}>Floor Price</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>141 NMBL</span>
                                <span className={style.key}>Total Volume</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>8%</span>
                                <span className={style.key}>Listed</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>8%</span>
                                <span className={style.key}>Listed</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>41 NMBL</span>
                                <span className={style.key}>Floor Price</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>141 NMBL</span>
                                <span className={style.key}>Total Volume</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>8%</span>
                                <span className={style.key}>Listed</span>
                            </div>
                            <div className={style.hero_stats__item}>
                                <span className={style.value}>8%</span>
                                <span className={style.key}>Listed</span>
                            </div>
                        </div>
                        <div className={style.hero_links}>
                            <div className={style.hero_links__item}>
                                <Image
                                    src={iconShare}
                                    width={21}
                                    height={24}
                                    alt="share-icon"
                                />
                            </div>
                            <div className={style.hero_links__item}>
                                <Image
                                    src={iconDots}
                                    width={21}
                                    height={24}
                                    alt="share-dots"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.trade_bar}>
                        <div className={style.trade_bar__search}>
                            <input type="text" placeholder="Search items" />
                        </div>
                        <div className={style.trade_bar__tabs}>
                            <div
                                onClick={() => setShowChart(false)}
                                className={`${style.trade_bar__tabs__item} ${
                                    !showChart && style.active
                                }`}
                            >
                                <Image
                                    width={19}
                                    height={19}
                                    src={iconItems}
                                    alt="items"
                                />
                                <span>Items</span>
                            </div>
                            <div
                                onClick={() => setShowChart(true)}
                                className={`${style.trade_bar__tabs__item} ${
                                    showChart && style.active
                                }`}
                            >
                                <Image
                                    width={19}
                                    height={19}
                                    src={iconStats}
                                    alt="items"
                                />
                                <span>Stats</span>
                            </div>
                        </div>
                        <div className={style.trade_bar__refresh}>
                            <Image
                                width={21}
                                height={21}
                                src={iconReload}
                                alt="reload"
                            />
                            <span>Refreshed a while ago</span>
                        </div>
                    </div>
                    {showChart ? (
                        <div className={style.chart_list}>
                            <div className={style.chart_item__candlestick}><ChartTradingContent /></div>
                            <div className={style.chart_item__area}><ChartAreaContent /></div>
                        </div>
                    ) : (
                        <div className={style.showcase}>
                            <div className={style.showcase__sidebar_left}>
                                <SidebarFilter />
                            </div>
                            <div className={style.showcase__cards_list}>
                                {[...Array(10)].map((card, idx) => (
                                    <div
                                        key={idx}
                                        className={style.showcase__card_item}
                                    >
                                        <NFTCard />
                                    </div>
                                ))}
                                <div className={style.showcase__card_item}>
                                    <NFTCard />
                                </div>
                            </div>
                            <div className={style.showcase__sidebar_right}>
                                <SidebarCart />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default withAuthorization(ChannelContent)
