import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";


function Sidebar() {
    const url = useLocation();
    
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon className = "sidebar__twitterIcon" />

            <Link to="/" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/" ? true : false} Icon = {HomeIcon} text = "Home" />  
            </Link>

            <Link to="/explore" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/explore" ? true : false} Icon = {SearchIcon} text = "Explore" />
            </Link>

            <Link to="/notifications" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/notifications" ? true : false} Icon = {NotificationsNoneIcon} text = "Notifications" />
            </Link>

            <Link to="/messages" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/messages" ? true : false} Icon = {MailOutlineIcon} text = "Messages" />
            </Link>

            <Link to="/bookmarks" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/bookmarks" ? true : false} Icon = {BookmarkBorderIcon} text = "Bookmarks" />
            </Link>

            <Link to="/lists" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/lists" ? true : false} Icon = {ListAltIcon} text = "Lists" />
            </Link>

            <Link to="/profile" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/profile" ? true : false} Icon = {PermIdentityIcon} text = "Profile" /> 
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
                <SidebarOption active = {url.pathname === "/more" ? true : false} Icon = {MoreHorizIcon} text = "More" />
            </Link>
            
            
            
            
            
            
            
            

            {/* Sidebar options */}

           <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            
        </div>
    )
}

export default Sidebar
