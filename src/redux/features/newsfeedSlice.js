import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const newsFeedSlice = createSlice({
  name: 'newsfeed',
  initialState,
  reducers: {

  },
})

export const {  } = newsFeedSlice.actions

export default newsFeedSlice.reducer