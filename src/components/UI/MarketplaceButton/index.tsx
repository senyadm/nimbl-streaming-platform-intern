import Image from 'next/image'
import React, { FC } from 'react'
import styles from './MarketplaceButton.module.scss'

interface IButton {
    imgPath: string | null
    text: string
    isActive: boolean
}

const MarketplaceButton: FC<IButton> = ({ imgPath, text, isActive }) => {
    return (
        <div className={`${styles.button} ${isActive && styles.active} `}>
            {imgPath && <Image src={imgPath} alt="arrow" />}
            <button>{text}</button>
        </div>
    )
}

export default MarketplaceButton
