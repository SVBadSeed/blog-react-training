import React from 'react'
import './Nav.scss'
import SubNav from "./SubNav"

const HeaderLeft = (props) => {
    const navItems = props.NavItems

    return (
        <div className='header__left'>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className="nav__item">
                        <a className='nav__link' href="">
                            {navItems[0].title}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className='nav__link' href="">
                            {navItems[1].title}
                        </a>
                        <SubNav nest={navItems[1].nesting}/>
                    </li>
                    <li className="nav__item">
                        <a className='nav__link' href="">
                            {navItems[2].title}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className='nav__link' href="">
                            {navItems[3].title}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderLeft