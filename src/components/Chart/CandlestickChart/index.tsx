import { FC, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
const ApexChartWithNoSSR = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})
import { ApexOptions } from 'apexcharts'
import { ChartZoomSelectionType } from '@/types'

type Props = {
    height: string
    width: string
    range: ChartZoomSelectionType
}

function generateChartData() {
    const chartData = []
    const firstDate = new Date()
    firstDate.setDate(firstDate.getDate() - 370)
    firstDate.setHours(0, 0, 0, 0)
    let value = 1200
    for (let i = 0; i < 370; i++) {
        if (i % 2 === 0) continue
        var newDate = new Date(firstDate)
        newDate.setDate(newDate.getDate() + i)

        value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
        const open = value + Math.round(Math.random() * 36 - 18)
        const low = Math.min(value, open) - Math.round(Math.random() * 5)
        const high = Math.max(value, open) + Math.round(Math.random() * 5)

        chartData.push({
            x: newDate.getTime(),
            y: [open, high, low, value],
        })
    }
    return chartData
}

const CandlestickChart: FC<Props> = ({ height, width, range }) => {
    const [series, setSeries] = useState<ApexOptions['series']>([{ data: [] }])
    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'candlestick',
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset: false,
                },
            },
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true,
            },
        },

        legend: {
            show: false,
        },
        xaxis: {
            type: 'datetime',
            tickPlacement: 'on',
            labels: {
                style: {
                    colors: 'rgba(143, 143, 143, 1)',
                    fontSize: '10px',
                    fontFamily: 'TT Octosquares',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            logarithmic: false,
            tickAmount: 4,
            decimalsInFloat: 0,
            forceNiceScale: false,
            tooltip: {
                enabled: true,
            },
            labels: {
                style: {
                    colors: 'rgba(143, 143, 143, 1)',
                    fontSize: '14px',
                    fontFamily: 'TT Octosquares',
                },
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#00EAF2',
                    downward: '#EA00D5',
                },
            },
        },
        tooltip: {
            theme: 'dark',
        },
        grid: {
            borderColor: '#2E3656',
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
    })

    const data = useRef<
        {
            x: number
            y: number[]
        }[]
    >(generateChartData())

    const updateData = (timeline: ChartZoomSelectionType) => {
        const toDay = new Date()
        if (timeline === 'ONE_MONTH') {
            setOptions((prev: any) => {
                return {
                    ...prev,
                    xaxis: {
                        ...prev.xaxis,
                        min: toDay.setDate(toDay.getDate() - 31),
                        max: toDay.getTime(),
                    },
                }
            })
        }

        if (timeline === 'ONE_YEAR') {
            setOptions((prev: any) => {
                return {
                    ...prev,
                    xaxis: {
                        ...prev.xaxis,
                        min: toDay.setDate(toDay.getDate() - 365),
                        max: toDay.getTime(),
                    },
                }
            })
        }

        if (timeline === 'ONE_WEEK') {
            setOptions((prev: any) => {
                return {
                    ...prev,
                    xaxis: {
                        ...prev.xaxis,
                        min: toDay.setDate(toDay.getDate() - 7),
                        max: toDay.getTime(),
                    },
                }
            })
        }

        if (timeline === 'ONE_DAY') {
            setOptions((prev: any) => {
                return {
                    ...prev,
                    xaxis: {
                        ...prev.xaxis,
                        min: toDay.setDate(toDay.getDate() - 1),
                        max: toDay.getTime(),
                    },
                }
            })
        }

        if (timeline === 'ALL') {
            setOptions((prev: any) => {
                return {
                    ...prev,
                    xaxis: {
                        ...prev.xaxis,
                        min: undefined,
                        max: undefined,
                    },
                }
            })
        }
    }

    useEffect(() => {
        setSeries([{ data: data.current }])
        const max = data.current.reduce((acc, curr) =>
            acc.y[1] > curr.y[1] ? acc : curr
        )
        const min = data.current.reduce((acc, curr) =>
            acc.y[2] < curr.y[2] ? acc : curr
        )
        setOptions((prev) => {
            return {
                ...prev,
                yaxis: {
                    ...prev.yaxis,
                    max: max.y[1],
                    min: min.y[2],
                },
            }
        })
    }, [])

    useEffect(() => {
        if (range) updateData(range)
    }, [range])

    return (
        <div>
            <ApexChartWithNoSSR
                height={height}
                width={width}
                type="candlestick"
                options={options}
                series={series}
            ></ApexChartWithNoSSR>
        </div>
    )
}

export default CandlestickChart
