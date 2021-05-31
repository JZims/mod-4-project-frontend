import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import index from './store/index'
import { Provider } from 'react-redux'


ReactDOM.render(
  <BrowserRouter>
  {/* // <React.StrictMode> */}
    <Provider store={index}>
     <App />
    </Provider>
  {/* </React.StrictMode>, */}
  </BrowserRouter>,
  document.getElementById('root')
);

