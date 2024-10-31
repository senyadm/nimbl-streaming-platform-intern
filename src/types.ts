export type navbarType = {
    id: number
    name: string
    link: string
    isActive: boolean
}

export type ChartZoomSelectionType =
    | 'ALL'
    | 'ONE_YEAR'
    | 'ONE_MONTH'
    | 'ONE_WEEK'
    | 'ONE_DAY'

export type videoCardType = {
    id: number
    title: string
    channel: string
    price: number
    avatar: string
    poster: string
}
