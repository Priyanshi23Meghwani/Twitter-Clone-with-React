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

function App() {
  return (
    //BEM convention
    <div className="app">
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
        {/* <Login /> */}

            
    </div>
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

export default App;
