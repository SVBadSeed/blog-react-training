import React from 'react'
import StoriesItem from "./StoriesItem"
import './Stories.scss'
import storiesOne from '../../images/stories/stories-1.jpg'
import storiesTwo from '../../images/stories/stories-2.jpg'
import storiesFree from '../../images/stories/stories-3.jpg'
import storiesFor from '../../images/stories/stories-4.jpg'

const Stories = ({setActive}) => {
    const storiesAll = [
        {
            image: storiesOne,
            title: 'Отдыхаю на природе ',
            date: '21.09.2020',
            id: 1
        },
        {
            image: storiesTwo,
            title: 'Заканчиваю сложный проект ',
            date: '15.09.2020',
            id: 2
        },
        {
            image: storiesFree,
            title: 'Переехал в новую квартиру ',
            date: '11.09.2020',
            id: 3
        },
        {
            image: storiesFor,
            title: 'Осень пришла!',
            date: '28.08.2020',
            id: 4
        }
    ]


    return (
        <div className="stories">
            {storiesAll.map(stories => (
                <StoriesItem key={stories.id} stories={stories} setActive={setActive}/>
            ))}
        </div>
    )
}

export default Stories