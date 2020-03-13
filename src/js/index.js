import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import configureStore from './store/index';

const store = configureStore();

const onChange = (text) => {
  const action = {
    type: 'CHANGE_TEXT',
    text: text,
  }
  store.dispatch(action);
}

const render = () => {
  const state = store.getState();

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
