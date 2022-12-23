import './App.scss'
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"
import Main from "./components/Main"
import StoryModal from "./components/modal/StoryModal"
import {useState} from "react"

function App() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='page'>
            <Header/>
            <Sidebar/>
            <Main setActive={setModalActive}/>
            <StoryModal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default App
