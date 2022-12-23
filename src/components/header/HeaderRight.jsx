import React from 'react'
import './Nav.scss'
import NavForm from "./NavForm"

const HeaderRight = () => {
    const navRight = [
        {title: 'Профиль'},
        {title: 'Выйти'}
    ]

    return (
        <div className='header__right'>
            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className='nav__link' href="">
                            {navRight[0].title}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className='nav__link' href="">
                            {navRight[1].title}
                        </a>
                    </li>
                </ul>
            </div>
            <NavForm/>
        </div>
    )
}

export default HeaderRight