import React from 'react'
import './right.css'
import {Users} from "../../dunmicData";
import Online from '../Online/Online';

export default function Rightbar({profile}) {
    const HomeRightbar=()=>{
        return(
        <>
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
        </>
        )
    }
    const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Gaza</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Palestaine</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/2.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/3.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/4.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/5.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/person/6.jpeg"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
            </div>
          </>
        );
      };

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}

            </div>
        </div>
    )
}
