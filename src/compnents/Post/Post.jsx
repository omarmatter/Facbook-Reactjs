import { MoreVert } from "@material-ui/icons";
import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUsername">Omar Matter</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="PostText">Hey It's my First Post</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" srcset="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" srcset="" />
            <img
              className="heartIcon"
              src="/assets/heart.png"
              alt=""
              srcset=""
            />
            <sapn className="likeCounter">32 people liked it </sapn>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
