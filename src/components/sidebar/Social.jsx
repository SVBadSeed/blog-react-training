import React from 'react'
import './Social.scss'
import vk from '../../images/vk.svg'
import instagram from '../../images/instagram.svg'
import pinterest from '../../images/pinterest.svg'

const Social = () => {

    return (
        <ul className='social'>
            <li className='social__item'>
                <a className='social__link' href="#" target='_blank'>
                    <img src={instagram} alt=""/>
                </a>
            </li>
            <li className='social__item'>
                <a className='social__link' href="#" target='_blank'>
                    <img src={vk} alt=""/>
                </a>
            </li>
            <li className='social__item'>
                <a className='social__link' href="#" target='_blank'>
                    <img src={pinterest} alt=""/>
                </a>
            </li>
        </ul>
    )
}

export default Social