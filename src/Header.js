import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="https://www.freepnglogos.com/uploads/globe-png/blue-globe-transparent-sporetesting-39.png"
          width="32"
          height="32"
          alt=""
        />
        Random Country
        <img
          src="https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png"
          width="40"
          height="32"
          alt=""
        />
        <hr></hr>
      </header>
      
    );
    
  }
}
