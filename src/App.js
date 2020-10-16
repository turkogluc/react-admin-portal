import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return <Provider store={store}>Hello world</Provider>;
}
export default hot(App);
