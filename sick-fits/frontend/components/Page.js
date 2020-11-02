import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";

// this component wraps all other components in _app.js, used for theming and data persistance
// possible refactor to es7

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
