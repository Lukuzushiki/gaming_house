import React from "react";
import Button from "elements/Button";
import Brand from "parts/iconText";

import Twitter from "assets/images/social_media-1.png";
import Facebook from "assets/images/social_media-2.png";
import Discord from "assets/images/social_media-3.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Brand />
            <img src={Twitter} alt="" className="img-social" />
            <img src={Facebook} alt="" className="img-social" />
            <img src={Discord} alt="" className="img-social" />
          </div>

          <div className="col-4">
            <ul className="list-group list-flush">
              <li className="list-group-item">
                <Button type="link" href="/legal">
                  Legal
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/contact">
                  Contact Us
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/refund">
                  Refund
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="list-group list-flush">
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy & Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/information">
                  Corporate Information
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright © 2020 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
