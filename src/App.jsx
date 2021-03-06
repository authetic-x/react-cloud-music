import React from 'react';
import routes from './routes/index';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
//import './assets/font/iconfont'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        { renderRoutes(routes) }
      </BrowserRouter>
    </Provider>
  );
}

export default App;