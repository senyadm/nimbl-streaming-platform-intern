import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    time:[{id:1,name:'1d',isActive:true},{id:2,name:'1w',isActive:false},{id:3,name:'1m',isActive:false},{id:4,name:'1y',isActive:false},{id:5,name:'All',isActive:false}]
}

const filter = createSlice({
  name: 'filter',
  initialState, 
  reducers: {
    setActive:(state,{payload}) => { 
        const newArr = state.time.map((item) => { 
            if(item.id!== payload) return {...item,isActive :false}
            else return {...item,isActive:true}
         })
         state.time = newArr
     }
  }
});

export const {setActive} = filter.actions

export default filter.reducer