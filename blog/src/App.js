import React, { Component } from 'react';
// import logo from './logo.svg';
import AsideContainer from './container/AsideContainer';
import HeadContainer from './container/HeadContainer';
import Affix from './container/Affix'
// import { Provider } from 'mobx-react';
import store from './store';

class App extends Component {
  render() {
    return (
      // <Provider {...store}>
        <div>
          <HeadContainer {...store}/>
          <AsideContainer {...store}/>
          <Affix {...store}/>
        </div>
      // {/* </Provider> */}
    );
  }
}

export default App;
