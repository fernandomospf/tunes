import React, { Component } from 'react';

import Header from '../Components/Header';

class Album extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album"> ALBUM </div>
      </>
    );
  }
}

export default Album;
