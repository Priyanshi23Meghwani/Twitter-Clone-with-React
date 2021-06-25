import React, { forwardRef } from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

//     1.display name  
//     2.@username 
//     3.verified badge 
//     4.text
//     5.image/gif
//     6.timestamp 
//     7.avatar


const Post = forwardRef(({displayName,
               username,
               verified,
               text,
               avatar,
               image
            }, ref) => {    
    return (
        <div className = "post" ref = {ref}>
            <div className="post__avatar">
                <img src={avatar}/>
            </div>

            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                        <h3> {displayName} {" "} 
                            <span className = "post__headerSpecial">
                                { verified && <VerifiedUserIcon className = "post__badge" />}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p> {text} </p>
                    </div>

                    {image ? (<div className = "post__image">
                        <img src={image} />
                    </div>):""}
                    
                </div>

                
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "small" />
                    <RepeatIcon fontSize = "small" />
                    <FavoriteBorderIcon fontSize = "small" />
                    <PublishIcon fontSize = "small" />
                </div>
            </div>

        </div>
    );
});

export default Post;
