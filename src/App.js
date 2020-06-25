import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import OurGamesPage from "pages/ourGames";
import Community from "pages/Community";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/ourGames" component={OurGamesPage}></Route>
        <Route exact path="/community" component={Community}></Route>
      </Router>
    </div>
  );
}

export default App;
