import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./WhoToFollow.css"

const WhoToFollow = ({header, displayName,username}) => {
    return(
        <>
        
        <div className="follow">
            <div className="follow__header">
                <h3>{header}</h3>
            </div>
            <div className="follow__body">
                {/* If component name and value(jsx value) is same then we can only write it once */}
                <FollowSubComponent displayName={"Daily all news"} username={"darkrider_88"}/>
                <FollowSubComponent displayName={"Food blogging"} username={"valerie_23"}/>
                <FollowSubComponent displayName={"Spiritual Path"} username={"binod_00"}/>

            </div>
        </div>
        <div style={{borderBottom:"10px solid #F7F9FA"}}>

        </div>
        
        </>
    )
}

const FollowSubComponent = ({displayName,username}) => {
    return(
        <div className="followSubComponent">
            <div className="followSubComponent__left">
                <div className="followSubComponent__avatar">
                    <Avatar src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random()*50)}`}/>
                </div>
                <div className="followSubComponent__text">
                    <h4>{displayName}</h4>
                    <p>By @{username}</p>
                </div>
            </div>
            <div className="followSubComponent__button">
                <Button className="followSubComponent__button__follow">Follow</Button>
            </div>
            
        </div>
    )
}

export default WhoToFollow;