import Image from 'next/image'
import styles from './RankingsCard.module.scss'

import pauseImg from '@/assets/icons/pause_2.svg'
import channelImg from '@/assets/icons/channel.svg'

const RankingsCard = () => {
    return (
        <div className={styles.ranking_boxs}>
            <div className={styles.card_loop}>
                <div className={styles.card_box}>
                    <div className={styles.video_header}>
                        <Image
                            className={styles.video_header_logo}
                            src={channelImg}
                            alt=""
                        />
                        <div className={styles.video_pause}>
                            <Image
                                className={styles.video_box_pause}
                                src={pauseImg}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.video_body}>
                        <div
                            className={styles.box_title}
                            style={{ color: '#fff' }}
                        >
                            @Yellow Stone
                        </div>
                        <div className={styles.box_buttons}>
                            <div
                                className={styles.box_button}
                                style={{ color: '#fff' }}
                            >
                                <div
                                    className={styles.box_button_header}
                                    style={{ color: '#fff' }}
                                >
                                    <div className={styles.count}>500K</div>
                                </div>
                                <div className={styles.box_button_footer}>
                                    members
                                </div>
                            </div>
                            <div className={styles.box_button}>
                                <div className={styles.box_button_title}>
                                    134 NMBL
                                </div>
                                <div
                                    className={styles.box_button_footer}
                                    style={{ color: '#fff' }}
                                >
                                    floor price
                                </div>
                            </div>
                        </div>

                        <div className={styles.box_footer}>
                            <div className={styles.tag_content}>
                                <div className={styles.tag}>#ETH-NFTs</div>
                                <div className={styles.tag}>#NFT-Trading</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RankingsCard
