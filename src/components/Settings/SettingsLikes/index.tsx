import { useState, FC } from 'react'
import style from './SettingsLikes.module.scss'
import useSound from 'use-sound'

type Props = {}

type Data = {
    [key: string]: { [key: string]: { [key: string]: boolean } }
}

const SettingsLikes: FC<Props> = () => {
    const [data, setData] = useState<Data>({
        VIDEO_PLAYER_PREFERENCES: {
            VIDEO_QUALITY: {
                'Watch videos in High Quality': true,
                'Use Data Saving mode while using mobile data': true,
            },
            SUBTITLES: {
                'Always show subtitles': true,
            },
            COMMENTS: {
                'Show comments in the lower left corner': true,
            },
        },
        MARKETPLACE_PREFERENCES : {
            SETTING_1: {
                'Setting 1 description': true,
            }
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
            <h1 className={style.title_section}>Likes and preferences</h1>
            <h2 className={style.sub_title_section}>Video player preferences</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                Video quality
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'VIDEO_PLAYER_PREFERENCES',
                        'VIDEO_QUALITY'
                    )}
                </div>
                <div className={style.settings_list__key}>
                Subtitles
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                        'VIDEO_PLAYER_PREFERENCES',
                        'SUBTITLES'
                    )}
                </div>
                <div className={style.settings_list__key}>
                Comments
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings(
                       'VIDEO_PLAYER_PREFERENCES',
                       'COMMENTS'
                    )}
                </div>
            </section>
            <div className={style.divider_line}></div>
            <h2 className={style.sub_title_section}>Marketplace preferences</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                Setting 1 
                </div>
                <div className={style.settings_list__value}>
                    {renderSettings('MARKETPLACE_PREFERENCES', 'SETTING_1')}
                </div>
            </section>
           
        </>
    )
}

export default SettingsLikes
