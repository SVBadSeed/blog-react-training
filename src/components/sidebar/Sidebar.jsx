import sidebarHeader from '../../images/sidebar-header.jpg'
import React from 'react'
import './Sidebar.scss'
import Profile from "./Profile"
import SidebarFooter from "./SidebarFooter"

const Sidebar = ({setActive}) => {

    return (
        <aside className='sidebar'>
            <div className='sidebar__header'>
                <img className='sidebar__header-img' src={sidebarHeader} alt=""/>
            </div>
            <div className='sidebar__content'>
                <Profile/>
            </div>
            <SidebarFooter setActive={setActive}/>
        </aside>
    )
}

export default Sidebar