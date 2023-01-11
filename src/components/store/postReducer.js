import postTwo from "../../images/post-2.jpg"
import video from "../../images/video.png"

const defaultState = {
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
}

const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_NEW_POST = 'DELETE_NEW_POST'


export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case DELETE_NEW_POST:
            return {...state, posts: [...state.posts.filter(post => post.id !== action.payload)]}

        default:
            return state
    }
}


export const addPostAction = (payload) => ({
    type: ADD_NEW_POST, payload
})


export const deletePostAction = (payload) => ({
    type: DELETE_NEW_POST, payload
})