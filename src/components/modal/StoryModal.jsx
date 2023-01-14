import React from 'react'
import './StoryModal.scss'
import poster from '../../images/poster.jpg'

const StoryModal = ({active, setActive}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content modal__content--story' onClick={e => e.stopPropagation()}>
                <img className='modal__image' src={poster} alt='/'/>
            </div>
        </div>
    )
}

export default StoryModal