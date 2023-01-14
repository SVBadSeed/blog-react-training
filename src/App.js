import './App.scss'
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"
import React, {useState} from "react"
import WriteMeModal from "./components/modal/WriteMeModal"
import {Outlet} from "react-router-dom"


function App() {
    const [contactActive, setContactActive] = useState(false)

    return (
        <div className='page'>
            <Outlet/>
            {/*<Main setActive={setModalActive}/>*/}
            <Header/>
            <Sidebar setActive={setContactActive}/>
            <WriteMeModal active={contactActive} setActive={setContactActive}/>
        </div>
    )
}

export default App
