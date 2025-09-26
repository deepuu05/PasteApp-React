import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    paste:pasteReducer,
    // todos: todosReducer,
    // filters: filtersReducer,
  },
})