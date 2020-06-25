import React from "react";

import BrandIcon from "parts/iconText";
import Button from "elements/Button";

export default function Navbar(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  function showFeatured() {
    window.scrollTo({
      top: props.refFeatured.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  if (props.isTransparent)
    return (
      <nav className="navbar navbar-expand-lg navbar-light transparent">
        <div className="container">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/ourGames")}`}>
                <Button className="nav-link" type="link" href="/ourGames">
                  Our Games
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/community")}`}>
                <Button className="nav-link" type="link" href="/community">
                  Community
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/news")}`}>
                <Button className="nav-link" type="link" href="/news">
                  News
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                <Button className="nav-link" type="link" href="/aboutUs">
                  About Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  else if (props.isLanding)
    return (
      <header className="text-center spacing-sm landing">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/ourGames")}`}>
                  <Button className="nav-link" type="link" href="/ourGames">
                    Our Games
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/community")}`}>
                  <Button className="nav-link" type="link" href="/community">
                    Community
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/news")}`}>
                  <Button className="nav-link" type="link" href="/news">
                    News
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                  <Button className="nav-link" type="link" href="/aboutUs">
                    About Us
                  </Button>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <div className="col-auto align-items-center justify-content-center">
              <h1>
                Hey, <span>Gamers</span>
              </h1>
              <h5>Are you sure with your skills? Wanna take a chalange?</h5>

              <Button
                className="btn px-5 py-2 my-5"
                isPrimary
                isLarge
                onClick={showFeatured}
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </header>
    );

  return (
    <header className="spacing-sm community">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/ourGames")}`}>
                <Button className="nav-link" type="link" href="/ourGames">
                  Our Games
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/community")}`}>
                <Button className="nav-link" type="link" href="/community">
                  Community
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/news")}`}>
                <Button className="nav-link" type="link" href="/news">
                  News
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                <Button className="nav-link" type="link" href="/aboutUs">
                  About Us
                </Button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row" style={{ marginTop: 160 }}>
          <div className="col-auto mb-4">
            <h3>Gaming House Community</h3>

            <Button
              className="btn mt-3 px-4 py-1"
              isDanger
              isLarge
              onClick={showFeatured}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
