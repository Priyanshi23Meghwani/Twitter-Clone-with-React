import React from 'react';
import "./Messages.css";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Button } from "@material-ui/core";


function MessageMid() {
    return (
        <div className = "messageMid">
            <div className = "messageMid__header">
                <div> <h3>Messages</h3> </div>
                
                <div className = "messageMid__header__icons">
                    <SettingsOutlinedIcon />
                    <EmailOutlinedIcon />
                </div>
            </div>

            <div className = "messageMid__body">
                <div className = "messageMid__dummy__text">
                    <h3>Send a message, get a message.</h3>
                    <p>Direct Messages are private conversations between
                        you and other people on Twitter. Share Tweets,
                        media, and more!</p>
                    <Button className="start_a_conversation"> Start a conversation </Button>
                </div>
            </div>
        </div>
    )
}


function MessageRight() {
    return (
        <div className = "messageRight">
            <div className = "messageRight__dummy__text">
                <h3>You don’t have a message selected</h3>
                <p>Choose one from your existing messages, or start a new one.</p>
                <Button className="new__message__button"> New message </Button>
            </div>
            
        </div>
    )
}

function Messages() {
    return (
        <div className = "messages">

            <MessageMid />
            <MessageRight />
            
        </div>
    )
}

export default Messages
