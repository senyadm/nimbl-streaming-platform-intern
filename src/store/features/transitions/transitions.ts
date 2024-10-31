import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowNavbar: true,
    isShowHeader: true,
    isShowMainSidebar: true,
    isShowMainVideoPlayer: true,
    isShowRecomendationDropdown: true,
    isShowMainVideos: true,
    isFirstRender: true,
}

const transitions = createSlice({
    name: 'transitions',
    initialState,
    reducers: {
        hideNavbarTransition: (state) => {
            state.isShowNavbar = false
        },
        hideHeaderTransition: (state) => {
            state.isShowHeader = false
        },
        hideMainSidebarTransition: (state) => {
            state.isShowMainSidebar = false
        },
        hideMainVideoPlayerTransition: (state) => {
            state.isShowMainVideoPlayer = false
        },
        hideRecomendationDropdownTransition: (state) => {
            state.isShowRecomendationDropdown = false
        },
        hideMainVideosTransition: (state) => {
            state.isShowMainVideos = false
        },
        hideFirstRender: (state) => {
            state.isFirstRender = false
        },
    },
})

export const {
    hideHeaderTransition,
    hideNavbarTransition,
    hideMainSidebarTransition,
    hideMainVideoPlayerTransition,
    hideMainVideosTransition,
    hideRecomendationDropdownTransition,
    hideFirstRender,
} = transitions.actions

export default transitions.reducer
