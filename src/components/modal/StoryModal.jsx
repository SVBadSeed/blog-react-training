import React from 'react'
import './StoryModal.scss'
import poster from '../../images/poster.jpg'
import {useDispatch} from "react-redux";

const StoryModal = ({active, setActive}) => {
    const dispatch = useDispatch()
    return (
        <div className={active ? 'modal show' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content modal__content--story' onClick={e => e.stopPropagation()}>
                <img className='modal__image' src={poster} alt='/'/>
            </div>
        </div>
    )
}

export default StoryModal