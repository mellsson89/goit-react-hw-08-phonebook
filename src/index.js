import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store,persistor} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.render(
  <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
          <BrowserRouter>
          <App />
          </BrowserRouter>
      </Provider>
      </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

