import React from 'react'
import './Nav.scss'
import NavForm from "./NavForm"
import {Link} from "react-router-dom"

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
                        <Link to={`cabinet`} className='nav__link'>
                            {navRight[0].title}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className='nav__link' href="">
                            {navRight[1].title}
                        </Link>
                    </li>
                </ul>
            </div>
            <NavForm/>
        </div>
    )
}

export default HeaderRight