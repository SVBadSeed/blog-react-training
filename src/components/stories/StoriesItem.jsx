import React from 'react'

const StoriesItem = (props) => {

    return (
        <div className='stories__item' onClick={() => props.setActive(true)}>
            <img className='stories__preview' src={props.stories.image} alt='/'/>
            <div className='stories__title'>{props.stories.title}</div>
            <div className='stories__date'>{props.stories.date}</div>
        </div>

    )
}

export default StoriesItem