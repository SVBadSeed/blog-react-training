import React, {useState} from 'react'
import '../Main.scss'
import Stories from "../stories/Stories"
import AddPost from "../posts/AddPost"
import Pagination from "../pagination/Pagination"
import AllPosts from "../posts/AllPosts"

const Main = ({setActive}) => {
    const [allPost, setAddPost] = useState('')

    const saveAddPostHandler = (inputAddPost) => {
        setAddPost(inputAddPost)
    }

    return (
        <main className='main'>
            <div className="container">
                <Stories setActive={setActive}/>
                <AddPost onSaveAddPost={saveAddPostHandler}/>
                <AllPosts createNewPost={allPost}/>
                <Pagination/>
            </div>
        </main>
    )
}

export default Main