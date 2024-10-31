import styles from './Announcement.module.scss'
import likeIcon from '@/assets/like.svg'
import commentIcon from '@/assets//icons/comment.svg'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
interface announcementProps {
    id: number
    img: StaticImageData
    name: string
    description: string
    likes: number
    comments: number
}
const index: FC<announcementProps> = ({
    id,
    img,
    name,
    description,
    likes,
    comments,
}) => {
    return (
        <section className={styles.singleAnnouncement} key={id}>
            <div className={styles.announcementLeft}>
                <div className={styles.logo}>
                    <Image src={img} alt={'name'} />
                </div>
            </div>
            <div className={styles.announcementInfo}>
                <div className={styles.name}>{name}</div>
                <div className={styles.announcementBody}>{description}</div>
                <div className={styles.additional}>
                    <div className={styles.likes}>
                        <Image src={likeIcon} alt={'like icon'} />
                        {likes}k
                    </div>
                    <div className={styles.comments}>
                        <Image src={commentIcon} alt={'comment icon'} />
                        {comments}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index
