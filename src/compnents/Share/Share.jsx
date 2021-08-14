import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'
import './share.css'

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <input  placeholder="What's in youer mind " type="text" className="shareInput" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia  htmlColor="tomato" className="shareIcon"/>
                            <span className="sharOptionText">Photo or Vedio</span>

                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="sharOptionText">Tag</span>

                        </div>
                        <div className="shareOption">
                            <Room    htmlColor="green" className="shareIcon"/>
                            <span className="sharOptionText">Location</span>

                        </div>
                        <div className="shareOption">
                            <EmojiEmotions    htmlColor="goldenrod" className="shareIcon"/>
                            <span className="sharOptionText">Feeling</span>

                        </div>

                 
                    </div>
                 
                     <button className="shareButton">share</button>
                </div>

            </div>

        </div>
    )
}
