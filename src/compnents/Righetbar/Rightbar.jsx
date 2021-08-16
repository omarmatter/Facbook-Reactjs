import React from 'react'
import './right.css'
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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                             <img  className="rightProfileImg" src="/assets/person/3.jpeg" alt="" srcset="" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Omar Hassen</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                             <img  className="rightProfileImg" src="/assets/person/3.jpeg" alt="" srcset="" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Omar Hassen</span>
                    </li> <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                             <img  className="rightProfileImg" src="/assets/person/3.jpeg" alt="" srcset="" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Omar Hassen</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                             <img  className="rightProfileImg" src="/assets/person/3.jpeg" alt="" srcset="" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Omar Hassen</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                             <img  className="rightProfileImg" src="/assets/person/3.jpeg" alt="" srcset="" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Omar Hassen</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                             <img  className="rightProfileImg" src="/assets/person/3.jpeg" alt="" srcset="" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Omar Hassen</span>
                    </li>
            
                </ul>
            </div>
        </div>
    )
}
