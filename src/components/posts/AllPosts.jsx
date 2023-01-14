import React from 'react'
import PostImage from "./PostImage"
import './AllPosts.scss'
import PostText from "./PostText"
import PostVideo from "./PostVideo"
import {useDispatch, useSelector} from "react-redux"
import {deletePostAction, searchFilter} from "../store/postReducer"

const AllPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const deletePost = (post) => {
        dispatch(deletePostAction(post.id))
    }

    return (
        <div className='Posts__all'>
            {posts.map(function (post) {
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