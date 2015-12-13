import StarRating from '../../react-bootstrap-star-rating';
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <StarRating
          defaultValue={5}
          onRatingChange={(_, v) => {
            console.log(v);
          }} 
          ref={ref => { this.starRating = ref; }}
        />
        <button onClick={() => { this.starRating.update(1); }}>
          1
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
