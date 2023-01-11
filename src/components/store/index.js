import {combineReducers, createStore} from "redux"
import {postReducer} from "./postReducer"
import {storiesReducer} from "./storiesReducer"
import {commentReducer} from "./commentReducer"

const rootReducer = combineReducers({
    posts: postReducer,
    stories: storiesReducer,
    comments: commentReducer
})

export const store = createStore(rootReducer)