import { FC, useState } from 'react'
import style from './ChartAreaContent.module.scss'
import AreaChart from '@/components/Chart/AreaChart'
import { ChartZoomSelectionType } from '@/types'

type Props = {}

const rangeActions: [ChartZoomSelectionType, string][] = [
    ['ALL', 'All'],
    ['ONE_YEAR', '1y'],
    ['ONE_MONTH', '1m'],
    ['ONE_WEEK', '1w'],
    ['ONE_DAY', '1d'],
]

const ChartAreaContent: FC<Props> = () => {
    const [range, setRange] = useState<ChartZoomSelectionType>('ALL')

    return (
        <div className={style.chart__wrap}>
            <div className={style.chart__header}>
                <span># of Listings</span>
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
            <AreaChart height="150" width="100%" range={range} />
            <div className={style.chart__footer}>
                <div className={style.chart__stats_item}>
                    <span className={style.key}>Supply</span>{' '}
                    <span className={style.value}>10 000</span>
                </div>
                <div className={style.chart__stats_item}>
                    <span className={style.key}>Holders</span>{' '}
                    <span className={style.value}>4 293</span>
                </div>
                <div className={style.chart__stats_item}>
                    <span className={style.key}>Avg owned</span>{' '}
                    <span className={style.value}>2.4</span>
                </div>
                <div className={style.chart__stats_item}>
                    <span className={style.key}>Unique holders</span>{' '}
                    <span className={style.value}>43%</span>
                </div>
            </div>
        </div>
    )
}

export default ChartAreaContent
