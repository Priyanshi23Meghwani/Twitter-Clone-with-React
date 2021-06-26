import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Messages from "./Messages";
import Bookmark from "./Bookmark";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Explore from './Explore';
import Profile from "./Profile";
import Notifications from "./Notifications";
import Lists from "./Lists";
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {

  const [{user},dispatch] = useStateValue();  
  return (
    //BEM convention
    <>
    <div className="app" id="demo">
      {user? <Main /> : <Login />}                        
    </div>
    <p id="message">Please open this site on a desktop.</p>   
    </>
  );
}

const Home = () =>{
  return(
    <>
      <Feed />
      <Widgets />
    </>

  )
}   

const Main = () =>{
  return(
    <>
      <Sidebar /> 


      <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/messages" exact component={Messages}></Route>
            <Route path="/bookmarks" exact component={Bookmark}></Route>
            <Route path="/explore" exact component={Explore}></Route>
            <Route path="/profile" exact component={Profile}></Route>
            <Route path="/notifications" exact component={Notifications}></Route>
            <Route path="/lists" exact component={Lists}></Route> 

        {/* <Route component={Nomatch}></Route> if 404 */}
      </Switch>
  </>
  )
}

export default App;


