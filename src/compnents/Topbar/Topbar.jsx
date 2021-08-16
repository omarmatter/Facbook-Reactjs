import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import './topbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Facbook  </span>
        </div>
        <div className="topbarCenter">
            <div className="searchbr">
              <Search className="searchIcon"/>
              <input placeholder="Serach" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
            <Link to="/Home" ><span className="topbarLink">Home</span></Link>
                <span className="topbarLink">Time</span>

            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">4</span>
                </div>
         
            </div>
            <Link to="/Profile" >
            <img src="/assets/person/1.jpeg" alt="" className="topbarImage"/>
            </Link>
        </div>
        </div>
    )
}
