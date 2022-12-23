import React from 'react'
import './NavForm.scss'

const NavForm = () => {
    return (
        <form action="/" className="search" method='post'>
            <div className="search__container">
                <input className='search__input' type="text" placeholder='Поиск по блогу'/>
            </div>
        </form>
    )
}

export default NavForm