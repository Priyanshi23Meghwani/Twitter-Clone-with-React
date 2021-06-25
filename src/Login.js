import React from 'react';
import "./Login.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';


function Login() {

    const [{},dispatch] = useStateValue();
    const signin = () => {
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                type:"set_user",
                user: result.user
            })
            
            
        })
    }


    return (
        <div className="login">
            <div className="login__body">
                <div className="login__body__area">
                    <TwitterIcon className="login__body__area__icon"/>
                    <p className="login__body__area__heading">Happening now</p>
                    <p className="login__body__area__subheading">Join Twitter today.</p>
                    {/* <Button className="login__body__area__signup">Sign up</Button> */}
                    <Button className="login__body__area__login" onClick={signin}>Log in with google</Button>
                </div>
                <div className="login__body__img">
                    <img src="http://pictures.brafton.com/Employers-who-want-to-locate-the-best-possible-talent-can-do-so-with-the-help-of-social-media_2041_40058337_0_14106242_500.jpg"/>
                </div>
            </div>
            <div className="login__footer">  
                <p>About</p> 
                <p>Help Center</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Ads info</p>
                <p>Blog</p>
                <p>Status</p>
                <p>Careers</p>
                <p>Brand Resources</p>
                <p>Advertising</p>
                <p>Marketing</p>
                <p>Twitter for Business</p>
                <p>Developers</p>
                <p>Directory</p>
                <p>Settings</p>
            </div>
            
        </div>
    )
}

export default Login
