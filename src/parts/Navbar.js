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
                <Button className="nav-link" type="link" href="">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/ourGames")}`}>
                <Button className="nav-link" type="link" href="">
                  Our Games
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/community")}`}>
                <Button className="nav-link" type="link" href="">
                  Community
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/news")}`}>
                <Button className="nav-link" type="link" href="">
                  News
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                <Button className="nav-link" type="link" href="">
                  About Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

  return (
    <header className="text-center spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/ourGames")}`}>
                <Button className="nav-link" type="link" href="">
                  Our Games
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/community")}`}>
                <Button className="nav-link" type="link" href="">
                  Community
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/news")}`}>
                <Button className="nav-link" type="link" href="">
                  News
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                <Button className="nav-link" type="link" href="">
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
}
