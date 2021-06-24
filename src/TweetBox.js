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


var imgUrl;




function TweetBox() {


    const [buttonLoader, setButtonLoader] = useState(false);
    const [tweetMessage, setTweetmessage ] = useState("");
    // const [tweetImage, setTweetImage ] = useState("");

    const onImageUpload = (event) => {
        if(event.target.files[0])
        {
            let img = event.target.files[0]
            setButtonLoader(true);
            const uploadTask = storage.ref(`/tweet-images/${img.name}`).put(img);
            uploadTask.on('state_changed',
            (snapshot) => console.log(snapshot),
             (err) => console.log(err),
             async () => {
                 imgUrl = await storage.ref('tweet-images').child(img.name).getDownloadURL();
                 setButtonLoader(false);
                 console.log(imgUrl);
                
             })
        }    
    }

    const sendTweet = e => {
        e.preventDefault();
        const imgCheck = imgUrl ? imgUrl:"";
        db.collection('posts').add({
            displayName : "Priyanshi",
            username: "pm",
            verified: "true",
            text: tweetMessage,
            avatar: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
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
                    <Avatar style = {{ marginLeft: "15px", height:"50px", width: "50px"}} />
                    <input onChange = {e => setTweetmessage(e.target.value)} 
                           value= {tweetMessage} 
                           placeholder = "What's happening?" 
                           type= "text" />

                </div>
                <div className = "tweetBox__bottom">
                    <div className = "tweetBox__bottom__icons">
                        
                            <input type='file' id="image-upload" onChange={onImageUpload} hidden/> 
                        <IconButton> 
                            <label htmlFor="image-upload">
                                <CropOriginalIcon style = {{color: "var(--twitter-color)"}} />
                            </label>
                        </IconButton>
                        <IconButton> 
                        <label htmlFor="image-upload">
                            <GifIcon style = {{color: "var(--twitter-color)" , height: "40px", width : "40px"}}/>
                        </label>
                        </IconButton>
                        <IconButton> <InsertEmoticonIcon style = {{color: "var(--twitter-color)"}} /> 
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
