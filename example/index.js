import React, { Component } from 'react';
import StarRating from 'react-bootstrap-star-rating';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <StarRating
        defaultValue={5}
        min={0}
        max={10}
        step={0.5} />
    );
  }
}

render(<App />, document.getElementById('app'));
