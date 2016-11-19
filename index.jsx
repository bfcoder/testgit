"use strict";

import React                    from "react";
import { connect }              from "react-redux";

export default class Index extends React.Component {
  meh() {
    return "di";
  }
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
