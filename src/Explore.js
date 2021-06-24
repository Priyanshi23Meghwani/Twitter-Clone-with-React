import React from 'react';    
import "./Explore.css";
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Widgets from "./Widgets";
import WhoToFollow from './WhoToFollow';

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

function Explore() {
    return (
        <>
        <div className = "explore">
            <div className="explore__top">
                <div className="explore__header">
                    <div className = "widgets__input">
                        <SearchIcon className = "widgets__searchIcon" />
                        <input placeholder = "Search Twitter" type = "text" />
                    </div>
                    <SettingsOutlinedIcon className="explore__header__icon"/>

                </div>
                <Navigations nav_array={["For you","COVID-19","Trending","Sports","News","Entertainment"]}/>
            
            </div>
            <div className = "explore__body">  
                <div className = "explore__body__image">
                    <div className="explore__body__image__text">
                        <h2><i>#</i> People</h2>
                        <h4>One day the people that don’t even believe in you will tell everyone how they met you.</h4>        
                    </div>
                </div>
            </div>  
            <ExploreHash p1="Trending in India" hashtag="COVID-19" p2="2345" img="https://www.fda.gov/files/covid19-1600x900.jpg"/> 
            <ExploreHash p1="Trending" hashtag="YellowTwitter" p2="1232" img="https://www.pngkit.com/png/detail/905-9059034_yellow-twitter-twitter-logo-gray-png.png"/>
            <ExploreHash p1="Trending in India" hashtag="RamMandir" p2="5643" img="https://spiderimg.amarujala.com/assets/images/2020/11/03/750x506/ram-mandir_1604379263.jpeg"/>
            <ExploreHash p1="Trending" hashtag="YellowTwitter" p2="1232" img="https://www.pngkit.com/png/detail/905-9059034_yellow-twitter-twitter-logo-gray-png.png"/>         
        </div>
        <Widgets/>
        
        
        </>
    )
}

const ExploreHash = ({p1,hashtag,p2,img}) => {
    return(
        <div className = "exploreHash">
            <div className="exploreHash__text">
                <p className="exploreHash__text__p1">{p1}</p>
                <h4><i># </i>{hashtag}</h4>
                <p className="exploreHash__text__p1">{p2} Tweets</p>
            </div>
            <div className = "exploreHash__img">
                <img src={img}/>
            </div>

        </div>
    )
}
export default Explore
