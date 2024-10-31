import { FC } from 'react'
import style from './SidebarCart.module.scss'
import Image from 'next/image'

import iconArrowDown from '@/assets/icons/arrow-down.svg'
import imageCard1 from '@/assets/channel-content/card1.png'

const SidebarCart: FC = () => {
    return (
        <div>
            <div className={style.cart_tabs}>
                <div className={style.cart_tabs__item}>Buy</div>
                <div className={style.cart_tabs__item}>Bid</div>
                <div className={style.cart_tabs__item}>Sweep</div>
            </div>
            <div className={style.cart_body}>
                <h4 className={style.cart_title}>Bulk Buy</h4>
                <div className={style.cart_list}>
                    <div className={style.cart_item}>
                        <Image
                            width={56}
                            height={46}
                            src={imageCard1}
                            alt="imageCard"
                            className={style.img}
                        />
                        <span className={style.title}>@JamesB</span>
                        <div className={style.price}>
                            <span className={style.key}>Floor Price: </span>
                            <span className={style.value}>65 NMBL</span>
                        </div>
                    </div>
                </div>
                <button className={style.cart_buyBtn}>Buy now</button>
            </div>
            <div className={style.quick_buy}>
                <div className={style.quick_buy__header}>
                    <div>Listings</div>
                    <div className={style.live}>Live</div>
                    <div className={style.select}>
                        <span>Recent</span>
                        <Image
                            width={14}
                            height={6}
                            src={iconArrowDown}
                            alt="iconArrowDown"
                            className={style.arrow_icon}
                        />
                    </div>
                </div>
                <div className={style.quick_buy__list}>
                   {[...Array(3)].map((card, idx) => <div className={style.quick_buy__item} key={idx}>
                        <Image
                            width={60}
                            height={60}
                            src={imageCard1}
                            alt="imageCard"
                            className={style.img}
                        />
                        <div className={style.info_block}>
                            <div className={style.info_block__title}>#1209</div>
                            <div className={style.info_block__time}>4 minutes</div>
                            <div className={style.info_block__author}><span>by </span> Yellow Stone</div>
                        </div>
                        <div className={style.price_block}>
                            <h4 className={style.price_value}>12 NMBL</h4>
                            <button className={style.buy_btn}>Quick Buy</button>
                        </div>
                    </div> ) }
                </div>
            </div>
        </div>
    )
}

export default SidebarCart
