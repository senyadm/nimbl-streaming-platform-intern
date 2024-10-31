import { useState } from 'react'
import style from './SettingsAccount.module.scss'
import Image from 'next/image'
import avatar from '@/assets/settings_avatar.png'

type Props = {}

const SettingsAccount = (props: Props) => {
    return (
        <>
            <h1 className={style.title_section}>Account</h1>
            <section className={style.form_section}>
                <form className={style.left_col}>
                    <label htmlFor="Username">Username</label>
                    <input
                        id="Username"
                        type="text"
                        placeholder="Enter username"
                    />
                    <label htmlFor="Bio">Username</label>
                    <textarea
                        placeholder="Tell other Nimblers about yourself!"
                        name="bio"
                        id="Bio"
                        rows={3}
                    ></textarea>
                    <label htmlFor="Email address">Email address</label>
                    <input
                        id="Email address"
                        type="email"
                        placeholder="Enter email"
                    />
                    <div className={style.button_list}>
                        <button type="submit">Update profile</button>
                        <button type="reset">Cancel</button>
                    </div>
                </form>
                <div className={style.right_col}>
                    <div className={style.avatar}>
                        <Image
                            alt="avatar"
                            width={110}
                            height={110}
                            src={avatar}
                        />
                        <span className={style.profile_link}>
                            nimbl.tv/username
                        </span>
                    </div>
                    <ul className={style.profile_settings__list}>
                        <li>Change profile picture</li>
                        <li>Change channel link</li>
                    </ul>
                </div>
            </section>

            <h2 className={style.sub_title_section} >My account</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>Account integration</div>
                <div className={style.settings_list__value}>
                    <p>You are not connected to your Google account.</p>
                    <p>
                        By integrating your Google account you will be able to
                        upload videos directly from YouTube.
                    </p>
                    <p className={style.link}>Connect to your Google account</p>
                </div>
                <div className={style.settings_list__key}>Subscription status</div>
                <div className={style.settings_list__value}>
                    <p>Your current status is a Standard user. </p>
                    <p>
                        With Nimbl Premium you will be able to access Premium
                        only features and unlock the true power of our platform.
                    </p>
                    <p className={style.link}>Subscribe to Nimbl Premium</p>
                </div>
            </section>
        </>
    )
}

export default SettingsAccount
