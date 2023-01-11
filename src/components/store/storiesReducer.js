const defaultState = {
    story: false
}

const THIS_STORIES = 'THIS_STORIES'

export const storiesReducer = (state = defaultState, action) => {
    switch (state.action) {
        case THIS_STORIES:
            return {...state, story: true}

        default:
            return state
    }
}

export const stateStories = (payload) => ({
    type: THIS_STORIES, payload
})