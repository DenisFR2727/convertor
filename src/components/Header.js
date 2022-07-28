import React from "react";
import "./Header.css"
import Nav from "./Nav/Nav";

function Header(props) {
  return (
<header>
      <div className="top-bar animate-dropdown" />
      <div className="main-header">
        <div className="container">
          <h1 className="site-title">КОНВЕРТЕР ВАЛЮТ</h1>
        </div>
      </div>
      <div className="header-nav">
        <div className="container">
         <Nav/>
        </div>
      </div>
  </header>
  );
}
export default Header;
