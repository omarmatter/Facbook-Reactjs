import React from 'react'
import Feed from '../../compnents/Feed/Feed.jsx'
import Rightbar from '../../compnents/Righetbar/Rightbar.jsx'
import Sidebar from '../../compnents/Sidebar/Sidebar.jsx'
import Topbar from '../../compnents/Topbar/Topbar.jsx'
import './home.css'

export default function Home() {
    return (
      <>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
      </>
    )
}
