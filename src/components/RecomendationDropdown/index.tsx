import Image from 'next/image'
import styles from './RecomendationDropdown.module.scss'

import trendingImg from '../../assets/icons/play2earn.svg'
import plus from '../../assets/icons/plus.svg'

const RecomendationDropdown = () => {
    return (
        <div className={styles.main}>
            <div className={styles.background}>
                <Image src={trendingImg} alt="trending" />
                <div>
                    <h3>Trending Videos</h3>
                </div>
                <div className={styles.plus}>
                    <Image src={plus} alt="plus" />
                </div>
            </div>

            <div className={styles.sub_categories}>
                <div className={styles.sub_categories_item}>
                    <Image src={trendingImg} alt="trending" />
                    <div>
                        <h3>Trending Videos</h3>
                    </div>
                </div>
                <div className={styles.sub_categories_item}>
                    <Image src={trendingImg} alt="trending" />
                    <div>
                        <h3>Trending Videos</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecomendationDropdown
