import React from 'react'

const PostText = (props) => {
    const post = props.allPosts

    return (
        <article className='post'>
            <button className='post__button-close' type='button' onClick={props.deletePost}/>
            <div className='post__content'>
                <div className='post__title'>
                    <a href='#'>{post.title}</a>
                </div>
                <p className='post__description'>
                    {post.description}
                </p>
            </div>
            <div className='post__footer'>
                <ul className='post__data'>
                    <li className='post__data-item'>
                        <time dateTime='2020-06-21'>
                            {post.time}
                        </time>
                    </li>
                    <li className='post__data-item'>
                        <a href='#' className='post__category'>
                            {post.category}
                        </a>
                    </li>
                </ul>
                <div>
                    <button className='post__button-refresh'>
                        Редактировать
                    </button>
                    <a className='post__read' href='#'>
                        {post.read}
                    </a>
                </div>
            </div>
        </article>
    )
}

export default PostText