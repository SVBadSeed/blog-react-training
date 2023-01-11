const defaultState = {
    comments: []
}
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'

export const commentReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW_COMMENT:
            return {...state, comments: [...state.comments, action.payload]}

        default:
            return state
    }
}


export const addCommentAction = (payload) => ({
    type: ADD_NEW_COMMENT, payload
})