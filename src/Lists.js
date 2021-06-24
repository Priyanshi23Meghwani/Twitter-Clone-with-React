import React from 'react';
import "./Lists.css";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { IconButton } from '@material-ui/core';
import WhoToFollow from "./WhoToFollow";
import Widgets from "./Widgets";



function Lists() {
    return (
        <>
        <div className="list">
            <div className="list__header">
                <div className="list__header__text">
                    <IconButton> <ArrowBackOutlinedIcon style={{color:"var(--twitter-color"}}/> </IconButton>
                    <h2>Lists</h2>
                </div>
                
                <div className="list__header__icon">
                    <IconButton> <PostAddOutlinedIcon style = {{color:"var(--twitter-color"}} /> </IconButton>
                    <IconButton> <MoreHorizOutlinedIcon style = {{color:"var(--twitter-color"}} /> </IconButton>
                </div>    
            </div>

            <div className="list__body">
                <div className="list__body__pinned">
                    <div className="list__body__pinned__heading">
                        <h3>Pinned Lists</h3>
                    </div>
                    <div className="list__body__pinned__text">
                        <p>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
                    </div>
                </div>

                <WhoToFollow header="Discover new Lists" displayName="DarkRider" username="darkrider_88"/>

                <div className="list__body__pinned__yourList">
                    <div className="list__body__pinned__heading">
                        <h3>Your Lists</h3>
                    </div>
                    <div className="list__body__pinned__text">
                        <p>You haven't created or followed any Lists. When you do, they'll show up here.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <Widgets />
        </>
    )
}

export default Lists
