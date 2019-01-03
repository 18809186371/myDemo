import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Root from './components';
import store from './store';

ReactDOM.render(<Provider {...store}>
    <BrowserRouter>
        <Root />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
