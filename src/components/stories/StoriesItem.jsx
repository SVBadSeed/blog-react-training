import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {stateStories} from "../store/storiesReducer";

const StoriesItem = (props) => {
    const dispatch = useDispatch()
    // () => setModalActive(true)

    return (
        <div className='stories__item' onClick={() => dispatch(stateStories(true))}>
            <img className='stories__preview' src={props.stories.image} alt='/'/>
            <div className='stories__title'>{props.stories.title}</div>
            <div className='stories__date'>{props.stories.date}</div>
        </div>

    )
}

export default StoriesItem