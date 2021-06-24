import React from "react";
import "./Profile.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Button } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Widgets from "./Widgets";
import Post from "./Post";
import { Link } from "react-router-dom"

function Profile(){
    return(
        <>
        <div className="profile">
            <div className="profile__header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <ArrowBackIcon  style = {{color:"var(--twitter-color)"}} /> 
            </Link>
                
                <h3>Priyanshi Meghwani</h3>
            </div>

            <div className="profile__description">
                <div className="profile__description__coverImg">

                    <div className="profile__description__coverImg__inner">
                        <img src="https://source.unsplash.com/1600x900/?nature,water"/>
                    </div>

                    <div className="profile__description__coverImg__dp">
                        <img src="https://source.unsplash.com/480x480/?man"/>
                    </div>    
                </div>
                <div className="profile__description__icons">
                        <MoreHorizIcon style={{color:"var(--twitter-color)" ,
                         border:"1px solid var(--twitter-color)",
                         borderRadius: "50px",
                         padding:"6px",
                         marginRight:"10px"}} />
                        <NotificationsActiveIcon style={{color:"var(--twitter-color)", border:"1px solid var(--twitter-color)", borderRadius: "50px",padding:"6px", marginRight:"10px"}} />
                        <Button variant="outlined" className="profile__following__button" >Following</Button>   
                </div>
            </div>

            <div className="profile__body">
                <div className="profile__body__userName">
                    <h2>DarkRider</h2>
                    <p>@darkrider_88</p>
                </div>
                <div className="profile__body__text">
                    <p>I am no one. CTF player.. learner..</p>
                </div>
                <div className="profile__body__icons">
                    <div className="profile__body__icons__div"> <LocationOnOutlinedIcon /> 
                        <span>India</span>
                    </div>
                    <div className="profile__body__icons__div" > <LinkOutlinedIcon />
                        <span styles={{paddingLeft:"5px"}} >https://securelydark.blogspot.com/</span>
                    </div>
                    <div className="profile__body__icons__div"> <CakeOutlinedIcon />
                    <span>Born August 8</span>
                    </div>
                    <div className="profile__body__icons__div"> <DateRangeIcon />
                    <span>Joined June 2015</span>
                    </div>
                </div>
                <div className="profile__body__followings">
                    
                    <p><b>93</b>Following</p>
                    <p><b>15</b>Followers</p>

                </div>


            </div>

            <Navigations nav_array={["Tweets","Tweets & Replies","Media","Likes"]}/>
            <Post 
                    key = {"1"}
                    displayName = {"DarkRider"} 
                    username = {"darkrider_88"}
                    verified = {true}
                    text = {"You want to save retail traders, then bring back margin rule .      #SEBInewMarginRules"}
                    avatar = {"https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"}
                     />
            <Post 
                    key = {"1"}
                    displayName = {"DarkRider"} 
                    username = {"darkrider_88"}
                    verified = {true}
                    text = {"You want to save retail traders, then bring back margin rule .      #SEBInewMarginRules"}
                    avatar = {"https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"}
                    image = {"https://i.natgeofe.com/n/4bf47147-ce80-49c6-98ae-52f63349045f/67655.jpg"} 
                     />
        </div>
        <Widgets />
        </>

    );
}
function Navigations({nav_array}) {
    return(
        <div className = "explore__options">
                    <ul className = "explore__list" >

                        {nav_array.map((i,index) => ( 

                            <li className={index===0 ? "active":""}>{i}</li>
                        ))}
                        
                    </ul>
        </div>
    );
}

export default Profile;