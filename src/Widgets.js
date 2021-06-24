import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Widgets.css";
import { TwitterTimelineEmbed , 
         TwitterShareButton , 
        TwitterTweetEmbed } from
        "react-twitter-embed";

function Widgets() {
    return (
        <div className ="widgets">
            <div className = "widgets__input">
                <SearchIcon className = "widgets__searchIcon" />
                <input placeholder = "Search Twitter" type = "text" />
            </div>

            <div className = "widgets__widgetContainer">
                <h2>Whats happening</h2>
                <TwitterTweetEmbed tweetId = {"1403385285443006471"} />
                <TwitterTimelineEmbed
                    sourceType = "profile"
                    screenName = "darkrider_88"
                    options = {{height: 500}} />

                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options = {{text: "#reactjs is awesome" , via: "cleverqazi"}} />
            </div>
            
        </div>
    )
}

export default Widgets
