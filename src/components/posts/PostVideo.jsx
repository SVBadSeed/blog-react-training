import React from 'react'

const PostVideo = (props) => {
    const post = props.allPosts

    return (
        <article className='post'>
            <button className='post__button-close' type='button' onClick={props.deletePost}/>
            <div className='post__header'>
                <div className='embed'>

                </div>
            </div>
            <div className='post__content'>
                <h2 className='post__title'>
                    <a href=''>
                        {post.title}
                    </a>
                </h2>
            </div>
            <div className='post__footer'>
                <ul className='post__data'>
                    <li className='post__data-item'>
                        <time dateTime='2020-06-21'>
                            21.06.2020
                        </time>
                    </li>
                    <li className='post__data-item'>
                        <a href=''>{post.category}</a>
                    </li>
                </ul>
                <a className='post__read' href='#'>{post.read}</a>
            </div>
        </article>
    )
}

export default PostVideo