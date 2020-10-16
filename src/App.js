import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { store } from './redux/store';
import history from './router/history';
import MainLayout from './page/layout/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <MainLayout />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default hot(App);
