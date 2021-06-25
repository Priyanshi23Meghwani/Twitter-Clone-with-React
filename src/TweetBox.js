import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button , IconButton } from "@material-ui/core";
import db from "./firebase";
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { storage } from './firebase';
import firebase from "firebase";
import { CircularProgress } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import Tooltip from "@material-ui/core/Tooltip";




var imgUrl;




function TweetBox() {

    const [{user},dispatch] = useStateValue();
    const [buttonLoader, setButtonLoader] = useState(false);
    const [tweetMessage, setTweetmessage ] = useState("");
    // const [tweetImage, setTweetImage ] = useState("");

    const addEmoji = () =>{
        setTweetmessage(`${tweetMessage} 😇`);
    }
    
    const onImageUpload = (event) => {
        if(event.target.files[0])
        {
            let img = event.target.files[0]
            setButtonLoader(true);
            const uploadTask = storage.ref(`/tweet-images/${img.name}`).put(img);
            uploadTask.on('state_changed',
            (snapshot) => (snapshot),
             (err) => console.log(err),
             async () => {
                 imgUrl = await storage.ref('tweet-images').child(img.name).getDownloadURL();
                 setButtonLoader(false);
                 
                
             })
        }    
    }

    const sendTweet = e => {
        e.preventDefault();
        const imgCheck = imgUrl ? imgUrl:"";
        db.collection('posts').add({
            userid:user.uid,
            displayName : user.displayName,
            username: (user.email).split("@")[0],
            verified: "true",
            text: tweetMessage,
            avatar: user.photoURL,
            image:imgCheck,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setTweetmessage("");
        imgUrl = "";
        // setTweetImage("");
    };

    return (
        <div className= "tweetBox">

            <form>
                <div className = "tweetBox__input">
                    <img src={user.photoURL} style = {{ marginLeft: "15px", height:"50px", width: "50px",borderRadius:"50%"}} />
                    <textarea maxlength="200" onChange = {e => setTweetmessage(e.target.value)} 
                           value= {tweetMessage} 
                           placeholder = "What's happening?" 
                           type= "text" />

                </div>
                <div className = "tweetBox__bottom">
                    <div className = "tweetBox__bottom__icons">
                        
                            <input type='file' id="image-upload" onChange={onImageUpload} hidden/> 
                        
                            
                                <IconButton> 
                                <label htmlFor="image-upload">
                                    <Tooltip title="Upload Image" arrow>
                                        <CropOriginalIcon id="image__icon" alt="Upload an image" style = {{color: "var(--twitter-color)"}} />
                                    </Tooltip>
                                </label>
                                </IconButton>
                            
                                <IconButton>
                                <label htmlFor="image-upload">
                                    <Tooltip title="Upload Gif" arrow>
                                        <GifIcon alt="Upload a gif" style = {{color: "var(--twitter-color)" , height: "40px", width : "40px"}}/>
                                    </Tooltip>
                                    </label>
                                </IconButton>
                            
                        
                        <IconButton> 
                            <InsertEmoticonIcon onClick={addEmoji} style = {{color: "var(--twitter-color)"}} /> 
                        </IconButton>
                    </div>
                    <Button className= "tweetBox__tweetButton" 
                            type = "submit"
                            onClick = {sendTweet} 
                            disabled={buttonLoader ? true: false}>{buttonLoader ? <CircularProgress size={23}/>:"Tweet"}  </Button>
                </div>
            </form>    
        </div>
    )
}

export default TweetBox
