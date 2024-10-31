import {useState} from 'react'
import Layout from '@/components/Layout'
import VideoPlayer from '@/components/VideoPlayer'
import styles from '@/styles/Settings.module.scss'
import SettingsAccount from '@/components/Settings/SettingsAccount'
import SettingsNotifications from '@/components/Settings/SettingsNotifications'
import SettingsLikes from '@/components/Settings/SettingsLikes'
import SettingsSecurity from '@/components/Settings/SettingsSecurity'
import SettingsWallet from '@/components/Settings/SettingsWallet'


enum SettingsTabs {
    ACCOUNT = 'Account',
    NOTIFICATIONS = 'Notifications',
    LIKES_AND_PREFERENCES = 'Likes and preferences',
    SECURITY_AND_PRIVACY = 'Security and privacy',
    WALLET = 'Wallet',
}

type SettingsTabsStr = keyof typeof SettingsTabs

const settingsTabsArr: SettingsTabsStr[] = [
    'ACCOUNT',
    'NOTIFICATIONS',
    'LIKES_AND_PREFERENCES',
    'SECURITY_AND_PRIVACY',
    'WALLET',
]

const SettingsPage = () => {
    const [activeSettingsTab, setActiveSettingsTab] = useState<SettingsTabsStr>('ACCOUNT')




    return (
        <Layout>
            <div className={styles.settings}>
                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebar__title}>Settings</h3>
                    <ul className={styles.sidebar__list}>
                        {settingsTabsArr.map(item => {
                            return <li key={item} className={`${styles.sidebar__item} ${item === activeSettingsTab && styles.active}`}
                            onClick={() => setActiveSettingsTab(item)}
                            >{SettingsTabs[item]}</li>
                        })}
                    </ul>
                </aside>
                <main className={styles.container}>
                    <div className={styles.content}>
                        {  activeSettingsTab === "ACCOUNT" ?
                            <SettingsAccount />  : 
                            activeSettingsTab === "NOTIFICATIONS" ? 
                           <SettingsNotifications /> :
                           activeSettingsTab === "LIKES_AND_PREFERENCES" ?
                           <SettingsLikes /> : 
                           activeSettingsTab === "SECURITY_AND_PRIVACY" ?
                           <SettingsSecurity /> : 
                           activeSettingsTab === 'WALLET' ? 
                           <SettingsWallet /> : null
                        }
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default SettingsPage
