import React from 'react'

const StoriesItem = (props) => {
    const setModalActive = props.setActive

    return (
        <div className='stories__item' onClick={() => setModalActive(true)}>
            <img className='stories__preview' src={props.stories.image} alt='/'/>
            <div className='stories__title'>{props.stories.title}</div>
            <div className='stories__date'>{props.stories.date}</div>
        </div>

    )
}

export default StoriesItem