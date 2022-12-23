import React from 'react'
import './Header.scss'
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const Header = () => {
    const navData = [
        {
            title: 'Главная'
        },
        {
            title: 'Статьи',
            nesting: {
                title: 'Создание сайтов',
                internet: 'Интернет маркетинг',
                videoUp: 'Продвижение видео'
            }
        },
        {
            title: 'Обо мне'
        },
        {
            title: 'Реклама'
        },
    ]

    return (
        <header className='header'>
            <HeaderLeft NavItems={navData}/>
            <HeaderRight/>
        </header>
    )
}

export default Header