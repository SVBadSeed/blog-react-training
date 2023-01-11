import React from 'react'
import './SidebarFooter.scss'

const SidebarFooter = ({setActive}) => {

    const btnData = {
        btnRed: 'Мои работы',
        btnBlue: 'Написать мне'
    }

    return (
        <div className='sidebar__footer'>
            <a className='btn btn--red' href=''>{btnData.btnRed}</a>
            <button onClick={() => setActive(true)} className='btn btn--blue' type='button'
                    data-modal='contact-modal'>{btnData.btnBlue}</button>
        </div>
    )
}

export default SidebarFooter