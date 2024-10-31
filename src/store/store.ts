import { configureStore, Store } from '@reduxjs/toolkit'
import navbarSlice from './features/navbar/navbarSlice'
import filter from './features/rankings-filter/filter'
import videos from './features/videos/videosSlice'
import transitions from './features/transitions/transitions'

const store = configureStore({
    reducer: {
        navbar: navbarSlice,
        filter: filter,
        videos,
        transitions,
    },
})

export type RootState = ReturnType<typeof store.getState>
export default store
