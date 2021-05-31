import { createSlice } from '@reduxjs/toolkit'



export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null
  }, 

  reducers: {
    setData: (state, { payload }) => {
      state.data = payload 
    }
    // },
    // decrement: (state, { payload }) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer