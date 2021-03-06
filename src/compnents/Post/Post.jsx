import { MoreVert } from "@material-ui/icons";
import React from "react";
import "./post.css";
import {Users} from "../../dunmicData";
import { useState } from "react";


export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

 const  likeHandler=()=>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);

  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u)=>u.id === post.userId)[0].profilePicture }
              alt=""
            />
            <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username }</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="PostText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" srcset="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" onClick={likeHandler}  alt="" srcset="" />
            <img
              className="heartIcon"
              src="/assets/heart.png"
              alt=""
              srcset=""
              onClick={likeHandler}
            />
            <sapn className="likeCounter">{like} people liked it </sapn>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
