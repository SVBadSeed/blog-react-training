import React from 'react'
import './Nav.scss'
import SubNav from "./SubNav"
import {Link} from "react-router-dom"


const HeaderLeft = (props) => {
    const navItems = props.NavItems

    return (
        <div className='header__left'>
            <nav className='nav'>
                <ul className='nav__list'>
                    <li className="nav__item">
                        <Link to={`main`} className='nav__link'>
                            {navItems[0].title}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className='nav__link' href="/">
                            {navItems[1].title}
                        </Link>
                        <SubNav nest={navItems[1].nesting}/>
                    </li>
                    <li className="nav__item">
                        <Link className='nav__link' href="/">
                            {navItems[2].title}
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className='nav__link' href="/">
                            {navItems[3].title}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderLeft