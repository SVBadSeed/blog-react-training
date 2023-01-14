import postTwo from "../../images/post-2.jpg"
import video from "../../images/video.png"
import {createSlice} from "@reduxjs/toolkit"


// export default createReducer(defaultState, builder => {
//     builder.addCase(addPostAction, (state, action) => {
//         state.posts.push(action.payload)
//     })
//
//     builder.addCase(deletePostAction, (state, action) => {
//         state.posts = state.posts.filter(post => post.id !== action.payload)
//     })
//
//     builder.addCase(searchFilter, (state, action) => {
//         state.posts = state.posts.filter(post => post.title.toLowerCase().includes(action.payload.value.toLowerCase()))
//         return state
//     })
// })


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [
            {
                title: 'Заметка',
                description: 'Описание поста',
                time: '21.06.2020',
                category: 'Заметка',
                read: 'Посмотреть',
                type: 'text',
                id: Math.random().toString()
            },
            {
                image: postTwo,
                title: 'Название поста',
                description: 'Описание поста',
                time: '20.11.2020',
                category: 'Создание сайтов',
                read: 'Читать',
                type: 'image',
                id: Math.random().toString()
            },
            {
                image: video,
                title: 'Видео',
                description: 'Описание поста',
                time: '21.06.2020',
                category: 'Заметка',
                read: 'Оставить комментарий',
                type: 'video',
                id: Math.random().toString()
            }
        ]
    },

    reducers: {
        addPostAction(state, action) {
            state.posts.push(action.payload)
        },
        deletePostAction(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    }
})


export default postsSlice.reducer
export const {addPostAction, deletePostAction} = postsSlice.actions