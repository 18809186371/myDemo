import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AsideContainer from './container/AsideContainer';
import HeadContainer from './container/HeadContainer';
import Affix from './container/Affix'
import { Provider } from 'mobx-react';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <div>
          <HeadContainer title={'shengG当年的demo'} />
          <AsideContainer />
          <Affix />      
          <BrowserRouter basename="shengG">
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
