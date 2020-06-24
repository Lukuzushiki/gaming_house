import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import OurGamesPage from "pages/ourGames";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/ourGames" component={OurGamesPage}></Route>
      </Router>
    </div>
  );
}

export default App;
