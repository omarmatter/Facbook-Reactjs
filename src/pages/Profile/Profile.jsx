import Feed from '../../compnents/Feed/Feed'
import Rightbar from '../../compnents/Righetbar/Rightbar'
import Sidebar from '../../compnents/Sidebar/Sidebar'
import Topbar from '../../compnents/Topbar/Topbar'
import './profile.css'

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className='profileCoverImg ' src="/assets/post/3.jpeg" alt="" srcset="" />
                <img className='profileUserImg ' src="/assets/person/1.jpeg" alt="" srcset="" />
                </div>
                 <div className="profileInfo">
                     <h4 className='profileInfoName'>Omar Matter</h4>
                     <span className="profileInofDesc">Full Stack Developer </span>
                 </div>
            </div>
         <div className="profileRightBottom">
         <Feed/>
        <Rightbar  profile/>
         </div>
        </div>
       
        </div>
        </>
    )
}
