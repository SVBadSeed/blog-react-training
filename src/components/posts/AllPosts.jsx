import React, {useState} from 'react'
import PostImage from "./PostImage"
import './AllPosts.scss'
import postTwo from '../../images/post-2.jpg'
import PostText from "./PostText"
import PostVideo from "./PostVideo"

const AllPosts = () => {

    const [allPosts, setAllPosts] = useState([
        {
            image: postTwo,
            title: 'Название поста',
            description: 'Описание поста',
            time: '20.11.2020',
            category: 'Создание сайтов',
            read: 'Читать',
            type: 'image',
            id: '1'
        },
        {
            image: postTwo,
            title: 'Название поста',
            description: 'Описание поста',
            time: '20.11.2020',
            category: 'Создание сайтов',
            read: 'Читать',
            type: 'image',
            id: '2'
        },
        {
            title: 'Заметка',
            description: 'Описание поста',
            time: '21.06.2020',
            category: 'Заметка',
            read: 'Посмотреть',
            type: 'text',
            id: '3'
        },
        {
            title: 'Видео',
            description: 'Описание поста',
            time: '21.06.2020',
            category: 'Заметка',
            read: 'Оставить комментарий',
            type: 'video',
            id: '4'
        }
    ])



    const deletePost = post => {
        setAllPosts(allPosts.filter(p => p.id !== post.id))
    }

    return (
        <div className='Posts__all'>
            {allPosts.map(function (post) {

                if (post.type === 'image') {
                    return <PostImage
                        key={post.id}
                        allPosts={post}
                        deletePost={() => deletePost(post)}/>
                } else if (post.type === 'text') {
                    return <PostText
                        key={post.id}
                        allPosts={post}
                        deletePost={() => deletePost(post)}/>
                } else if (post.type === 'video') {
                    return <PostVideo
                        key={post.id}
                        allPosts={post}
                        deletePost={() => deletePost(post)}/>
                }
            })}
        </div>
    )
}

export default AllPosts