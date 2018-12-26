import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react';
import Root from './components';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
