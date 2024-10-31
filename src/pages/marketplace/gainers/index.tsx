import Image from 'next/image'
import RecomendationDropdown from '@/components/RecomendationDropdown'

import styles from '../../../styles/Gainers.module.scss'

import arrowBottomImg from '../../../assets/icons/arrow-right-bottom.svg'
import arrowTopImg from '../../../assets/icons/arrow-right-top.svg'
import profile from '../../../assets/icons/profile.svg'
import { useState } from 'react'
import Head from 'next/head'
import MarketplaceButton from '@/components/UI/MarketplaceButton'
import Layout from '@/components/Layout'

const gainerTop = [
    {
        name: 'Bankless',
        logo: 'logo_vide_chanel',
        price: '204 NMBL',
        hours: '+21.6%',
        volume: '$7 123 422',
    },
    {
        name: 'Johnny Vnice',
        logo: 'mary-logo',
        price: '177 NMBL',
        hours: '+19.9%',
        volume: '$6 215 163',
    },
    {
        name: 'Johnny Vnice',
        logo: 'mary-logo',
        price: '177 NMBL',
        hours: '+19.9%',
        volume: '$6 215 163',
    },
    {
        name: 'Johnny Vnice',
        logo: 'mary-logo',
        price: '177 NMBL',
        hours: '+19.9%',
        volume: '$6 215 163',
    },
    {
        name: 'Johnny Vnice',
        logo: 'mary-logo',
        price: '177 NMBL',
        hours: '+19.9%',
        volume: '$6 215 163',
    },
    {
        name: 'Thunder Mary',
        logo: 'johnny-logo',
        price: '150 NMBL',
        hours: '+17.2%',
        volume: '$5 817 010',
    },
    {
        name: 'Impudent Jok',
        logo: 'jok-logo',
        price: '146 NMBL',
        hours: '+16.8%',
        volume: '$4 009 376',
    },
    {
        name: 'Mr Hawk',
        logo: 'hawk-logo',
        price: '142 NMBL',
        hours: '+15.1%',
        volume: '$3 109 426',
    },
    {
        name: 'Liam Evans',
        logo: 'evans-logo',
        price: '139 NMBL',
        hours: '+14.0%',
        volume: '$2 995 313',
    },
]

const gainerBottom = [
    {
        name: 'Bankless',
        logo: '@/assets/marketplace/gainer/logo_vide_chanel.svg',
        price: '18 NMBL',
        hours: '-22%',
        volume: '$23 422',
    },
    {
        name: 'Bankless',
        logo: '@/assets/marketplace/gainer/logo_vide_chanel.svg',
        price: '18 NMBL',
        hours: '-22%',
        volume: '$23 422',
    },
    {
        name: 'Bankless',
        logo: '@/assets/marketplace/gainer/logo_vide_chanel.svg',
        price: '18 NMBL',
        hours: '-22%',
        volume: '$23 422',
    },
    {
        name: 'Thunder Mary',
        logo: '@/assets/marketplace/gainer/johnny-logo.svg',
        price: '26 NMBL',
        hours: '-17.2%',
        volume: '$37 010',
    },
    {
        name: 'Impudent Jok',
        logo: '@/assets/marketplace/gainer/jok-logo.svg',
        price: '27 NMBL',
        hours: '-16.8%',
        volume: '$38 376',
    },
    {
        name: 'Mr Hawk',
        logo: '@/assets/marketplace/gainer/hawk-logo.svg',
        price: '30 NMBL',
        hours: '-14.1%',
        volume: '$40 006',
    },
    {
        name: 'Liam Evans',
        logo: '@/assets/marketplace/gainer/evans-logo.svg',
        price: '33 NMBL',
        hours: '-11.5%',
        volume: '$43 313',
    },
]

const GainersPage = () => {
    const [gainer, setGainer] = useState(true)
    const [activeButtonId, setActiveButtonId] = useState(0)

    return (
        <Layout>
            <Head>
                <title>Gainers & Loosers</title>
            </Head>
            <div className={styles.gainer}>
                <div className={styles.dropdowns}>
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                </div>

                <div className={styles.content}>
                    <div className={styles.content_buttons}>
                        <div
                            onClick={() => {
                                setGainer(true)
                                setActiveButtonId(0)
                            }}
                        >
                            <MarketplaceButton
                                imgPath={arrowTopImg}
                                text={'Top gainers'}
                                isActive={activeButtonId === 0}
                            />
                        </div>
                        <div
                            onClick={() => {
                                setGainer(false)
                                setActiveButtonId(1)
                            }}
                        >
                            <MarketplaceButton
                                imgPath={arrowBottomImg}
                                text={'Top loosers'}
                                isActive={activeButtonId === 1}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.gainer_tables}>
                    <div className={`${styles.gainer_table} ${styles.header}`}>
                        <div className={styles.table_id}>#</div>
                        <div className={styles.table_name}>Name</div>
                        <div className={styles.table_price}>Price</div>
                        <div
                            className={styles.table_avg}
                            style={{ color: '#A9A9B7 ' }}
                        >
                            24h
                        </div>
                        <div className={styles.table_volume}>Volume(24h)</div>
                    </div>

                    {gainer ? (
                        <div className={styles.wrap_table}>
                            {gainerTop.map((item, index) => (
                                <div
                                    className={`${styles.gainer_table} ${styles.body}`}
                                    key={index}
                                >
                                    <div className={styles.table_id}>
                                        {index + 1}
                                    </div>
                                    <div className={styles.table_name}>
                                        <Image
                                            className={styles.table_name_logo}
                                            src={profile}
                                            alt=""
                                        />
                                        <div
                                            className={styles.table_name_title}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.table_price} ${styles.active}`}
                                    >
                                        {item.price}
                                    </div>
                                    <div className={styles.table_avg}>
                                        {item.hours}
                                    </div>
                                    <div className={styles.table_volume}>
                                        {item.volume}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.wrap_table}>
                            {gainerBottom.map((item, index) => (
                                <div
                                    className={`${styles.gainer_table} ${styles.body}`}
                                    key={index}
                                >
                                    <div className={styles.table_id}>
                                        {index + 1}
                                    </div>
                                    <div className={styles.table_name}>
                                        <Image
                                            className={styles.table_name_logo}
                                            src={profile}
                                            alt=""
                                        />
                                        <div
                                            className={styles.table_name_title}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.table_price} ${styles.active}`}
                                    >
                                        {item.price}
                                    </div>
                                    <div
                                        className={`${styles.table_avg} ${styles.loser}`}
                                    >
                                        {item.hours}
                                    </div>
                                    <div className={styles.table_volume}>
                                        {item.volume}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default GainersPage
