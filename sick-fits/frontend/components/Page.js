import React, { Component } from "react";

// this component wraps all other components in _app.js, used for theming and data persistance
// possible refactor to es7

class Page extends Component {
  render() {
    return (
      <div>
        <p>I'm the Page Component</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
