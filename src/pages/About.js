import React from "react";

import Navbar from "parts/Navbar";
import Content from "parts/aboutUs";
import Footer from "parts/Footer";

export default function About() {
  return (
    <div>
      <Navbar {...this.props} isTransparent />
    </div>
  );
}
