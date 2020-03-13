import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// import App from './components/app';
import MainArea from './components/mainArea';

const reducer = (state = { text: 'text' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_TEXT':
      return Object.assign({}, state, {text: action.text});
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
    <MainArea
      text={state.text}
      onChange={onChange} />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
