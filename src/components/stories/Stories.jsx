import React, {useState} from 'react'
import StoriesItem from "./StoriesItem"
import './Stories.scss'
import storiesOne from '../../images/stories/stories-1.jpg'
import storiesTwo from '../../images/stories/stories-2.jpg'
import storiesFree from '../../images/stories/stories-3.jpg'
import storiesFor from '../../images/stories/stories-4.jpg'
import StoryModal from "../modal/StoryModal"

const Stories = () => {
    const [modalActive, setModalActive] = useState(false)
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
            <StoryModal active={modalActive} setActive={setModalActive}/>
            {storiesAll.map(stories => (
                <StoriesItem key={stories.id} stories={stories} setActive={setModalActive}/>
            ))}
        </div>
    )
}

export default Stories