import React from 'react'
import './Main.scss'
import Stories from "./stories/Stories"
import AddPost from "./posts/AddPost"
import Pagination from "./pagination/Pagination"
import AllPosts from "./posts/AllPosts"

const Main = ({setActive}) => {

    return (
        <main className='main'>
            <div className="container">
                <Stories setActive={setActive}/>
                <AddPost/>
                <AllPosts/>
                <Pagination/>
            </div>
        </main>
    )
}

export default Main