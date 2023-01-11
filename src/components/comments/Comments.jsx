import React from 'react'
import './Comments.scss'

const Comments = ({allComments}) => {

    console.log(allComments)
    return (
        <li className='commends__item'>
            <div className="commends__header">
                <img className="commends__avatar" src={allComments.avatar} alt='/'/>
                <div className="commends__author">
                    <div className="commends__name">
                        {allComments.name}
                    </div>
                    <time className="commends__pubdate" dateTime="2020-12-21 19:21">
                        {allComments.time}
                    </time>
                </div>
            </div>
            <div className="commends__text">
                {allComments.description}
            </div>
            <button className="commends__reply" type="button">ответить</button>
        </li>
    )
}

export default Comments