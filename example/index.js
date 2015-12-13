import StarRating from '../../react-bootstrap-star-rating';
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <StarRating />
    );
  }
}

render(<App />, document.getElementById('app'));
