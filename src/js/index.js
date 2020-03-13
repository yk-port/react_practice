import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import configureStore from './store/index';

const reducer = (state = { text: 'text' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_TEXT':
      return Object.assign({}, state, {text: action.text});
    default:
      return state;
  }
}

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
