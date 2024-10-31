import { videos } from '@/pages/api/fakeData/videos';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videos
}

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {

    }
})

export default videosSlice.reducer