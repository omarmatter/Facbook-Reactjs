import React from 'react'
import './online.css'

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
             <img  className="rightProfileImg" src={user.profilePicture} alt="" srcset="" />
             <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    
    </li>
    )
}
