import React from "react";
import Button from "elements/Button";

export default function navCommunity(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <nav className="navbar navbar-expand-lg transparent">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item${getNavLinkClass("/community")}`}>
            <Button
              className="nav-link community"
              type="link"
              href="/community/post"
            >
              Post
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("https://discord.com/")}`}>
            <Button
              className="nav-link community"
              type="link"
              isExternal
              href="https://discord.com/"
            >
              Discord
            </Button>
          </li>
          <li className={`nav-item${getNavLinkClass("/community/faq")}`}>
            <Button
              className="nav-link community"
              type="link"
              href="/community/faq"
            >
              FAQ
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
