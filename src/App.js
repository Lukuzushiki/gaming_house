import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import OurGamesPage from "pages/ourGames";
import Community from "pages/Community";
import News from "pages/News";
import About from "pages/About";
import DetailGames from "pages/detailGames";
import Signup from "pages/Signup";
import Signin from "pages/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/ourGames" component={OurGamesPage}></Route>
        <Route exact path="/community" component={Community}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/aboutUs" component={About}></Route>
        <Route exact path="/properties/:id" component={DetailGames}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/signin" component={Signin}></Route>
      </Router>
    </div>
  );
}

export default App;
