import React from 'react'
import './Profile.scss'
import sidebarAvatar from '../../images/profile-avatar.jpg'
import Social from "./Social"

const Profile = () => {
    const text = 'Front-end разработчик. Практик верстки сайтов.' +
        ' Созданием сайтов занимаюсь с 2022 года. ' +
        'Опыта работы не имею.'

    const profileData = {
        name: 'Masthead',
        prof: 'блог front-end разработчика'
    }

    return (
        <div className='profile'>
            <img className='profile__avatar' src={sidebarAvatar} alt=""/>
            <div className='profile__header'>
                <div className='profile__name'>{profileData.name}</div>
                <div className='profile__prof'>{profileData.prof}</div>
            </div>
            <Social/>
            <div className='profile__text'>
                {text}
            </div>
        </div>
    )
}

export default Profile