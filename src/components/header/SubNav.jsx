import React from 'react'
import './SubNav.scss'


const SubNav = (props) => {

    return (
        <ul className='subnav'>
            <li>
                <a href="" className="subnav__link">
                    {props.nest.title}
                </a>
            </li>
            <li>
                <a href="" className="subnav__link">
                    {props.nest.internet}
                </a>
            </li>
            <li>
                <a href="" className="subnav__link">
                    {props.nest.videoUp}
                </a>
            </li>
        </ul>
    )
}

export default SubNav