import { useState, FC } from 'react'
import style from './SettingsSecurity.module.scss'
import useSound from 'use-sound'

type Props = {}

type Data = {
    [key: string]: { [key: string]: { [key: string]: boolean } }
}

const SettingsSecurity: FC<Props> = () => {
    const [data, setData] = useState<Data>({
        PROFILE_CONDIFENTIALITY: {
            PLAYLISTS: {
                'Display saved playlists': true,
                'Display created playlists': true,
            },
            FAVORITE_CHANNELS: {
                'Display favorite channels': true,
            },
            HISTORY: {
                'Save watched history': true,
            },
        }

    })

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
            <h1 className={style.title_section}>Security and privacy</h1>
            <h2 className={style.sub_title_section}>Profile condifentiality</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                Playlists
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'PROFILE_CONDIFENTIALITY',
                        'PLAYLISTS'
                    )}
                </div>
                <div className={style.settings_list__key}>
                Favorite channels
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'PROFILE_CONDIFENTIALITY',
                        'FAVORITE_CHANNELS'
                    )}
                </div>
                <div className={style.settings_list__key}>
                History
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                      'PROFILE_CONDIFENTIALITY',
                      'HISTORY'
                    )}
                </div>
            </section>
            <div className={style.divider_line}></div>
            <h2 className={style.sub_title_section}>Account security</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                Password
                </div>
                <div className={style.settings_list__value}>
                    <p className={style.link}>Change account password</p>
                </div>
            </section>
        </>
    )
}

export default SettingsSecurity
