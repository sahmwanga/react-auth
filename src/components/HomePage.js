import React, { Component } from "react";
import Header from "./Header";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header history={this.props} />
      </div>
    );
  }
}
