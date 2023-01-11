import './App.scss'
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"
import StoryModal from "./components/modal/StoryModal"
import React, {useState} from "react"
import WriteMeModal from "./components/modal/WriteMeModal"
import {Outlet} from "react-router-dom"


function App() {
    const [modalActive, setModalActive] = useState(false)
    const [contactActive, setContactActive] = useState(false)

    return (
        <div className='page'>
            <Outlet/>
            {/*<Main setActive={setModalActive}/>*/}
            <Header/>
            <Sidebar setActive={setContactActive}/>
            <StoryModal active={modalActive} setActive={setModalActive}/>
            <WriteMeModal active={contactActive} setActive={setContactActive}/>
        </div>
    )
}

export default App
