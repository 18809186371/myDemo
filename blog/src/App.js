import React, { Component } from 'react';
// import logo from './logo.svg';
import AsideContainer from './container/AsideContainer'
import HeadContainer from './container/HeadContainer'

class App extends Component {
  render() {
    return (
      <div>
        <HeadContainer />
        <AsideContainer />
      </div>
    );
  }
}

export default App;
