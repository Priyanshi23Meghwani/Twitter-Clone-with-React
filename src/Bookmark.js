import React from "react";
import Widgets from "./Widgets";

function Bookmark() {

    return(
        <>
        <div className = "bookmark" style = {styles.bookmark}>
            <div className = "bookmark__header" style = {styles.Bookmark__header}>
                <h3>Bookmarks</h3>
            </div>
            <div style = {styles.bodyText} >
                <h3 >You haven’t added any Tweets to your Bookmarks yet</h3>
                <p style = {styles.bodyText2}>When you do, they’ll show up here.</p>
            </div>

        </div> 
        <Widgets />
        </>

    );
}
const styles = {
    bookmark:{
         flex:"0.48",
         borderRight: "1px solid var(--twitter-background)"
    },
    Bookmark__header:{
        display: "flex",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        zIndex: "100",
        border: "1px solid var(--twitter-background)",
        padding: "15px 18px",
    },
    bodyText:{
        padding:"30px", 
        textAlign: "center",
        lineHeight: "2"             
    },
    bodyText2:{
        color:"gray"
    }
}


export default Bookmark;