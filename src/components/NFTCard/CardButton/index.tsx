import { FC, ReactNode } from 'react'
import style from './CardButton.module.scss'

type Props = {
    children: ReactNode
}

const CardButton: FC<Props> = ({ children }) => {
    return (
        <div className={style.button_wrap}>
            <div className={style.button_content}>
                {children}
            </div>
        </div>
    )
}

export default CardButton
