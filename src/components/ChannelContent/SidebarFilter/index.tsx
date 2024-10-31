import { FC, useState } from 'react'
import style from './SidebarFilter.module.scss'
import Image from 'next/image'

import iconFilter from '@/assets/channel-content/icon-filter.svg'
import iconArrowDown from '@/assets/icons/arrow-down.svg'

type Props = {}

const SidebarFilter: FC<Props> = ({}) => {
    const [SwitchBuyNow, setSwitchBuyNow] = useState<boolean>(true)
    const [isOpenPrice, setIsOpenPrice] = useState<boolean>(false)

    return (
        <div className={style.filter}>
            <div className={style.filter_item}>
                <Image
                    width={18}
                    height={16}
                    src={iconFilter}
                    alt="IconFilter"
                />
            </div>
            <div
                className={`${style.filter_item} ${
                    SwitchBuyNow && style.active
                }`}
            >
                <span>Buy now</span>
                <div
                    onClick={() => setSwitchBuyNow((prev) => !prev)}
                    className={`${style.switch} ${
                        SwitchBuyNow && style.active
                    }`}
                >
                    <div className={style.switch__circle}></div>
                </div>
            </div>
            <div onClick={() => setIsOpenPrice(prev => !prev)} className={`${style.filter_item} ${
                    isOpenPrice && style.active
                }`}>
                <span>Price</span>
                <Image
                    width={15}
                    height={9}
                    src={iconArrowDown}
                    alt="iconArrowDown"
                    className={style.arrow_icon}
                />
            </div>
            {isOpenPrice && (<div className={`${style.filter_item} ${style.filter_price}`}>
                <div className={style.price_type}>
                    SOL
                    <Image
                        width={11}
                        height={7}
                        src={iconArrowDown}
                        alt="iconArrowDown"
                    />
                </div>
                <input type="number" placeholder='Min' />
                <span>to</span>
                <input type="number" placeholder='Max' />
            </div>)}
            <div className={style.filter_item}>
                <span>Recent</span>
            </div>
            <div className={style.filter_item}>
                <span>Live trade</span>
            </div>
        </div>
    )
}

export default SidebarFilter
