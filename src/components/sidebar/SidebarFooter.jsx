import React from 'react'
import './SidebarFooter.scss'

const SidebarFooter = () => {

    const btnData = {
        btnRed: 'Мои работы',
        btnBlue: 'Написать мне'
    }

    return (
        <div className='sidebar__footer'>
            <a className='btn btn--red' href=''>{btnData.btnRed}</a>
            <button className='btn btn--blue' type='button' data-modal='contact-modal'>{btnData.btnBlue}</button>
        </div>
    )
}

export default SidebarFooter