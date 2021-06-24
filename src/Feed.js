import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

const NoPost = () =>{
    return(
        <div className="noPost">
            <h3 style={{color:"#9CA9B4"}}>No tweets yet. Start TWEETING.</h3>
        </div>
    );
}

function Feed() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className= "feed">
            <div className = "feed__header">
                <h3>Home</h3>
            </div>
            <TweetBox />
            {/* {console.log(posts)} */}
            
                


                { posts.length!==0?<FlipMove>{posts.map(post =>(
                    <Post 
                    key = {post.text}
                    displayName = {post.displayName} 
                    username = {post.username}
                    verified = {post.verified}
                    text = {post.text}
                    avatar = {post.avatar}
                    image = {post.image} />
                ))}</FlipMove>: <NoPost/>
            }
            
        </div>
    );
}

export default Feed
