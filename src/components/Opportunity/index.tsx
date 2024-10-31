import { FC } from 'react'
import styles from './Opportunity.module.scss'
import Image from 'next/image'
import imageCard1 from '@/assets/channel-content/card3.jpg'
import logo from '@/assets/user9.png'
import CardButton from '../NFTCard/CardButton'

const Opportunity: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.back}></div>
            <div className={styles.imgBlock}>
                <Image
                    className={styles.img}
                    src={imageCard1}
                    alt="imageCard"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src={logo} alt={'logo'} />
                </div>
                <div className={styles.name}>@JamesB</div>
                <div className={styles.size}>
                    <p>Community Size:</p>
                    <span className={styles.number}>4.2k</span>
                </div>
                <div className={styles.date}>
                    <p>Mint Date:</p>
                    <span className={styles.number}>Dec 24, 10:00 PM</span>
                </div>
            </div>
            <div className={styles.spots}>
                <div className={styles.progress}></div>
                <div className={styles.info}>
                    <p>Number of spots</p>
                    <div>
                        <p className={styles.percent}>20%</p>
                        <p className={styles.spotNumber}>(50/2000)</p>
                    </div>
                </div>
            </div>
            <div className={styles.btn}>
                <CardButton>Register</CardButton>
            </div>
        </div>
    )
}

export default Opportunity
