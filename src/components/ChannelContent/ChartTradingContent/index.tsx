import { FC, useState } from 'react'
import style from './ChartTradingContent.module.scss'
import { ChartZoomSelectionType } from '@/types'
import CandlestickChart from '@/components/Chart/CandlestickChart'

type Props = {}

const rangeActions: [ChartZoomSelectionType, string][] = [
    ['ALL', 'All'],
    ['ONE_YEAR', '1y'],
    ['ONE_MONTH', '1m'],
    ['ONE_WEEK', '1w'],
    ['ONE_DAY', '1d'],
]

const ChartTradingContent: FC<Props> = () => {
    const [range, setRange] = useState<ChartZoomSelectionType>('ALL')

    return (
        <div className={style.chart__wrap}>
            <div className={style.chart__header}>
                <span>Floor Price</span>
                <div className={style.chart__range_list}>
                    {rangeActions.map(([key, value]) => {
                       return <span key={key}
                       onClick={() => setRange(key)}
                        className={`${style.chart__range_item} ${
                            range === key && style.active
                        }`}
                    >{value}</span>
                    })}
                </div>
            </div>
            <CandlestickChart height='160' width='100%' range={range} />
        </div>
    )
}

export default ChartTradingContent
