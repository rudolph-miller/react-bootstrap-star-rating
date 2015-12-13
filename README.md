# React Bootstrap Star Rating

React wrapper of [bootstrap-star-rating](https://github.com/kartik-v/bootstrap-star-rating).

# Install

```sh
npm install --save react-bootstrap-star-rating
```

# Usage

```
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
```

# Image

![](http://g.recordit.co/4LXXLC78RQ.gif)
