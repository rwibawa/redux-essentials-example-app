import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: '0', name: 'Ryan Wibawa' },
  { id: '1', name: 'Celvie Toramaya' },
  { id: '2', name: 'Vincent Wibawa' }
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default userSlice.reducer