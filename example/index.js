import StarRating from '../../react-bootstrap-star-rating';
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <StarRating
        defaultValue={5}
        onRatingChange={(_, v) => {
          console.log(v);
        }} 
      />
    );
  }
}

render(<App />, document.getElementById('app'));
