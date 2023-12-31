import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { ScrollToTop } from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
