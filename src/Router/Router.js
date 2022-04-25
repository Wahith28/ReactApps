import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login.js";
import React from "react";
import SignUp from "../SignUp.js";
import Riva from "../Riva.js";
import Practice from "../Practice.js";
import NotFound from "./NotFound.js";
import Navbar from "../StoryPage/Components/Navbar.js";
import Storypage from "../StoryPage/Components/Storypage.js";
import New from "../new.js";
import Add from "../StoryPage/Components/Add.js";

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/SignUp" component={SignUp}></Route>
        <Route exact path="/Riva" component={Riva}></Route>
        <Route exact path="/Practice" component={Practice}></Route>
        <Route exact path="/new" component={Add}></Route>
        {/* <Route exact path="/Navbar" component={Navbar}></Route> */}
        <Route exact path="/Storypage" component={Storypage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default RouterApp;
