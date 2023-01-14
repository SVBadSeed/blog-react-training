import {combineReducers, configureStore} from "@reduxjs/toolkit"
import postsSlice from './postReducer'
import commentsSlice from './commentReducer'

const rootReducer = combineReducers({
    posts: postsSlice,
    comments: commentsSlice,
})

export const store = configureStore({
    reducer: rootReducer
})
