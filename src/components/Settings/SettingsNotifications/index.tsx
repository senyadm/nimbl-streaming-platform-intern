import { useState, FC } from 'react'
import style from './SettingsNotifications.module.scss'
import useSound from 'use-sound'
import is from '@sindresorhus/is'
import boolean = is.boolean

type Props = {}

type Data = {
    [key: string]: { [key: string]: { [key: string]: boolean } }
}

const SettingsNotifications: FC<Props> = () => {

    const soundUrl = '/sounds/pop-down.mp3'
    const soundUrl2 = '/sounds/pop-up-on.mp3'

    const [playOn] = useSound(
        soundUrl,
        { volume: 1 }
    );

    const [playOff] = useSound(
        soundUrl2,
        { volume: 1 }
    );




    const [data, setData] = useState<Data>({
        GENERAL_NOTIFICATIONS: {
            BROWSER_NOTIFICATIONS: {
                'Get in-browser push notifications': true,
            },
            CHANNEL_NOTIFICATIONS: {
                'Get new follower updates': true,
                'Get new comment updates': false,
            },
            OTHER_NOTIFICATIONS: {
                'Get occasional update notifications from Nimbl': true,
            },
        },
        WALLET_NOTIFICATIONS : {
            PURCHASE_NOTIFICATIONS: {
                'Get item sold updates': true,
                'Get bid activity updates': true,
                'Get price change updates': true,
                'Get auction expiration updates': true,
                'Get outbid updates': true,
                'Get owned item updates': true,
                'Get successful purchase updates': true,
            }
        },
        MARKETPLACE_NOTIFICATIONS: {
            UPDATES: {
                'Get trending channels digest': true,
                'Get favorite channel updates': false
            }
        }

    })

    const handleChange = (
        e: any,
        section: string,
        subsection: string,
        key: string
    ) => {
        setData((prev) => ({
            ...prev,
            [section]: {
                ...data[section],
                [subsection]: {
                    ...data[section][subsection],
                    [key]: e.target.checked,
                },
            },
        }))
        // eslint-disable-next-line no-unused-expressions
        e.target.checked ? playOn() : playOff()
    }

    const renderSettings = (
        section: string,
        subsection: string
    ) => {
        return Object.entries(data[section][subsection]).map(([key, value]) => {
            return (
                <label key={key}>
                    <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                            handleChange(e, section, subsection, key)
                        }
                    />
                    {key}
                </label>
            )
        })
    }

    return (
        <>
            <h1 className={style.title_section}>Notifications</h1>
            <p className={style.desc_section}>
                Select notifications you would like to receive
            </p>
            <h2 className={style.sub_title_section}>General notifications</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                    Browser notifications
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'GENERAL_NOTIFICATIONS',
                        'BROWSER_NOTIFICATIONS'
                    )}
                </div>
                <div className={style.settings_list__key}>
                    Channel notifications
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'GENERAL_NOTIFICATIONS',
                        'CHANNEL_NOTIFICATIONS'
                    )}
                </div>
                <div className={style.settings_list__key}>
                    Other notifications
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'GENERAL_NOTIFICATIONS',
                        'OTHER_NOTIFICATIONS'
                    )}
                </div>
            </section>
            <div className={style.divider_line}></div>
            <h2 className={style.sub_title_section}>Wallet notifications</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                    Purchase notifications
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings('WALLET_NOTIFICATIONS', 'PURCHASE_NOTIFICATIONS')}
                </div>
            </section>
            <div className={style.divider_line}></div>
            <h2 className={style.sub_title_section}>Marketplace notifications</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                    Updates
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings('MARKETPLACE_NOTIFICATIONS', 'UPDATES')}
                </div>
            </section>
        </>
    )
}

export default SettingsNotifications
