import React from 'react'
import {Link} from "react-router-dom"
import '../posts/AllPosts.scss'
import '../related/Related.scss'
import image from '../../images/image.jpg'
import share from '../../images/share.svg'
import video from '../../images/video.png'
import {useSelector} from "react-redux"
import '../comments/Comments.scss'
import Comments from "../comments/Comments"
import AddComment from "../comments/AddComment";

const Post = () => {
    const comments = useSelector(state => state.comments.comments)

    return (
        <div className='main'>
            <div className='container'>
                <article className="post">
                    <div className="post__actions">
                        <Link to={`/main`}>вернуться назад</Link>
                        <a href="#">поделиться
                            <img className="post__actions--icon" src={share} alt="поделиться"/>
                        </a>
                    </div>
                    <div className="post__header post__header--open">
                        <h1 className="post__title post__title--open">
                            Как я сходил на FrontEnd Conf 2021
                        </h1>
                        <ul className="post__data">
                            <li className="post__data-item">
                                <time dateTime="2020-06-21">
                                    21.06.2020
                                </time>
                            </li>
                            <li className="post__data-item">
                                <a href="">Создание сайтов</a>
                            </li>
                        </ul>
                    </div>
                    <div className="post__content">
                        <div className="post__text">
                            <h3>title h3</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Elementum volutpat orci
                                turpis urna. Et vestibulum, posuere tortor
                                lacinia sit. Sagittis porttitor orci auctor
                                in at tincidunt arcu egestas. Fusce arcu
                                sodales lacinia eu auctor nunc nam id.
                                Diam sit sed volutpat massa. Egestas
                                ornare vel volutpat.
                            </p>
                            <h4>title h4</h4>
                            <p> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Elementum volutpat orci
                                turpis urna. Et vestibulum, posuere tortor
                                lacinia sit. Sagittis porttitor orci auctor
                                in at tincidunt arcu egestas. Fusce arcu
                                sodales lacinia eu auctor nunc nam id.
                                Diam sit sed volutpat massa. Egestas
                                ornare vel volutpat.
                            </p>
                            <p>
                                <img src={image} alt=""/>
                            </p>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <ol>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ol>
                            <p>
                            <span className="fr-video">
                               <img src={video} alt=""/>
                            </span>
                            </p>
                        </div>
                        <div className="related">
                            <h3 className="post__subtitle">
                                Интересно почитать
                            </h3>
                            <ul className="related__list">
                                <li className='related__list-item'>
                                    <h4 className="related__list-title">
                                        <a className='related__link' href="#">
                                            Как я сходил на FrontEnd Conf 2021
                                        </a>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-06-21 19:43">21.06.2020</time>
                                </li>
                                <li className='related__list-item'>
                                    <h4 className="related__list-title">
                                        <Link className='related__link' href="#">
                                            Как я сходил на FrontEnd Conf 2021Как я сходил на FrontEnd Conf 2021
                                        </Link>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-06-21 19:43">21.06.2020</time>
                                </li>
                                <li className='related__list-item'>
                                    <h4 className="related__list-title">
                                        <Link className='related__link' href="#">
                                            Как я сходил на FrontEnd Conf 2021
                                        </Link>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-06-21 19:43">21.06.2020</time>
                                </li>
                                <li className='related__list-item'>
                                    <h4 className="related__list-title">
                                        <Link className='related__link' href="#">
                                            Как я сходил на FrontEnd Conf 2021
                                        </Link>
                                    </h4>
                                    <time className="related__list-date" dateTime="2020-06-21 19:43">21.06.2020</time>
                                </li>
                            </ul>
                        </div>
                        <h3 className="post__subtitle">
                            Обсуждение
                        </h3>
                        <AddComment/>
                        <ul className="commends commends-container">
                            {
                                comments.map((post) => (
                                    <Comments key={post.id} allComments={post}/>
                                ))}
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Post