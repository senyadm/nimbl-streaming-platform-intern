import { useState, FC } from 'react'
import style from './SettingsWallet.module.scss'

type Props = {}


const SettingsWallet: FC<Props> = () => {
    const [currency, setCurrency] = useState<string>('USD')

    return (
        <>
            <h1 className={style.title_section}>Wallet</h1>
            <h2 className={style.sub_title_section}>Financial settings</h2>
            <section className={style.settings_list}>
                <div className={style.settings_list__key}>
                    Currency conversion
                </div>
                <div className={style.settings_list__value}>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="USD">USD - United States Dollar</option>
                        <option value="EUR">EUR - Euro Countries</option>
                        <option value="CNY">CNY - Chinese yuan</option>
                    </select>
                </div>
                <div className={style.settings_list__key}>
                    Wallet integration{' '}
                </div>
                <div className={style.settings_list__value}>
                    <p>You are not connected to your MetaMask account.</p>
                    <p>
                        By integrating MetaMask you will be able to have a
                        wallet
                    </p>
                    <p className={style.link}>Connect to your account</p>
                </div>
            </section>
        </>
    )
}

export default SettingsWallet
