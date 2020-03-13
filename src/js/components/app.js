import React from 'react';

import MainArea from '../containers/mainArea';
import SideArea from '../containers/sideArea';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap">
        <SideArea />
        <MainArea />
      </div>
    );
  }
}
