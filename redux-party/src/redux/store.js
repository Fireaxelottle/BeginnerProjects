import { configureStore } from '@reduxjs/toolkit'
import helloReducer from './Slices/helloSlice'

export default configureStore({
  reducer: {
    hellos: helloReducer
  },
})