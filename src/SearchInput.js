import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

// import pic from ".images/japan-flag.jpg";
// function SearchInput(){
//   return <img src={pic} />
// }
// export default SearchInput

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
