import React, { PureComponent } from "react";
import Header from "./Header";
import Imagess from "./images";
import Button from "./buttons"

export default class App extends PureComponent {
  
  render() {
    return (
      <div>
        <Header />
        <Imagess />
        <Button/>
        
      </div>
    );
  }
}
