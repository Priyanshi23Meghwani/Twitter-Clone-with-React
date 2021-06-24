import React from 'react';
import "./Notifications.css";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Widgets from "./Widgets";


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

function Notifications() {
    return (
        <>
            <div className="notification">
                <div className="notification__header">
                    <div className="notification__header__heading">
                        <h3>Notifications</h3>
                        <SettingsOutlinedIcon style={{color:"var(--twitter-color)"}} />
                    </div>
                    <Navigations nav_array={["All","Mentions"]}/>
                </div>
                <div className="notification__body">
                    <p>I am tired of notifying you about all recent updates.</p>
                </div>    
            </div>
            <Widgets />
        </>
    )
}

export default Notifications
