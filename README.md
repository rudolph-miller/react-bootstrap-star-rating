# React Bootstrap Star Rating

[![npm version](https://badge.fury.io/js/react-bootstrap-star-rating.svg)](https://badge.fury.io/js/react-bootstrap-star-rating)

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

# Props

- `defaultValue`: `PropTypes.number`

Options below are [Plugin Options](http://plugins.krajee.com/star-rating#options).

- `stars`: `PropTypes.number`
- `glyphicon`: `PropTypes.bool`
- `symbol`: `PropTypes.string`
- `ratingClass`: `PropTypes.string`
- `min`: `PropTypes.number`
- `max`: `PropTypes.number`
- `step`: `PropTypes.number`
- `disabled`: `PropTypes.bool`
- `readonly`: `PropTypes.bool`
- `rtl`: `PropTypes.bool`
- `showClear`: `PropTypes.bool`
- `showCaption`: `PropTypes.bool`
- `size`: `PropTypes.string`
- `defaultCaption`: `PropTypes.string`
- `starCaptions`: `PropTypes.oneOfType([PropTypes.object, PropTypes.func])`
- `starCaptionClasses`: `PropTypes.oneOfType([PropTypes.object, PropTypes.func])`
- `clearButton`: `PropTypes.string`
- `clearButtonTitle`: `PropTypes.string`
- `clearButtonBaseClass`: `PropTypes.string`
- `clearButtonActiveClass`: `PropTypes.string`
- `clearValue`: `PropTypes.string`
- `clearCaption`: `PropTypes.string`
- `clearCaptionClass`: `PropTypes.string`
- `captionElement`: `PropTypes.string`
- `clearElement`: `PropTypes.string`
- `hoverEnabled`: `PropTypes.bool`
- `hoverChangeCaption`: `PropTypes.bool`
- `hoverChangeStars`: `PropTypes.bool`
- `hoverOnClear`: `PropTypes.bool`

Options below are [Plugin Events](http://plugins.krajee.com/star-rating#events).

- `onRatingChange`: `PropTypes.func`
- `onRatingClear`: `PropTypes.func`
- `onRatingReset`: `PropTypes.func`
- `onRatingHover`: `PropTypes.func`
- `onRatingHoverleave`: `PropTypes.func`

# Additional API

These are [Plugin Methods](http://plugins.krajee.com/star-rating#methods).

- `update`
- `refresh`
- `reset`
- `clear`
- `destroy`
- `create`

```
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.starRating.update(1);
    }, 1000);
  }

  render() {
    return (
      <StarRating
        ref={ref => { this.starRating = ref; }} />
    );
  }
}
```

# See Also

- [Bootstrap Star Rating](http://plugins.krajee.com/star-rating)
- [bootstrap-star-rating](https://github.com/kartik-v/bootstrap-star-rating)
