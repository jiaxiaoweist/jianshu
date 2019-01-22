import React, { Component } from 'react';
import {GlobalStyle} from "./style";
import {GlobalStyleIcon} from "./statics/iconfont/iconfont";
import Header from "./common/header";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <GlobalStyleIcon/>
        <Header/>
      </div>
    );
  }
}

export default App;
