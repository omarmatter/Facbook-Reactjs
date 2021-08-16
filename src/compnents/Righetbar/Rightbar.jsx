import React from 'react'
import './right.css'
import {Users} from "../../dunmicData";
import Online from '../Online/Online';

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="barthdayContainer">
                    <img className='birthdayImg' src="/assets/gift.png" alt="" srcset="" />
                    <sapn className="birthdayText">
                       <b> Pola Foster</b> and <b>3 other frindes</b> have a birthday today  
                    </sapn>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" srcset="" />
                <h4 className="rightbarTitle">Online Frinend</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                          <Online key={u.id} user={u}/>
                    ))}
                  
                </ul>
            </div>
        </div>
    )
}
