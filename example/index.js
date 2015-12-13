import StarRating from '../../react-bootstrap-star-rating';
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <StarRating defaultValue={5} />
    );
  }
}

render(<App />, document.getElementById('app'));
