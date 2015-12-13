require('bootstrap-star-rating/js/star-rating');
import $ from 'bootstrap-star-rating/node_modules/jquery';
import React, { Component, PropTypes } from 'react';

/* http://plugins.krajee.com/star-rating#options */
const pluginOptionPropTypes = {
  stars: PropTypes.number,
  glyphicon: PropTypes.bool,
  symbol: PropTypes.string,
  ratingClass: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  rtl: PropTypes.bool,
  showClear: PropTypes.bool,
  showCaption: PropTypes.bool,
  size: PropTypes.string,
  defaultCaption: PropTypes.string,
  starCaptions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  starCaptionClasses: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  clearButton: PropTypes.string,
  clearButtonTitle: PropTypes.string,
  clearButtonBaseClass: PropTypes.string,
  clearButtonActiveClass: PropTypes.string,
  clearValue: PropTypes.string,
  clearCaption: PropTypes.string,
  clearCaptionClass: PropTypes.string,
  captionElement: PropTypes.string,
  clearElement: PropTypes.string,
  hoverEnabled: PropTypes.bool,
  hoverChangeCaption: PropTypes.bool,
  hoverChangeStars: PropTypes.bool,
  hoverOnClear: PropTypes.bool
}

/* http://plugins.krajee.com/star-rating#events */
const pluginEvents = {
  'rating.change': 'onRatingChange',
  'rating.clear': 'onRatingClear',
  'rating.reset': 'onRatingReset',
  'rating.hover': 'onRatingHover',
  'rating.hoverleave': 'onRatingHoverleave'
}

export default class StarRating extends Component {
  static propTypes = {
    ...pluginOptionPropTypes,
    defaultValue: PropTypes.number
  }

  componentDidMount() {
    let options =  {};
    for ( let key in pluginOptionPropTypes ) {
      options[key] = this.props[key];
    }
    $(this._node).rating(options);
  }

  render() {
    return (
      <input
        ref={node => { this._node = node; }}
        defaultValue={this.props.defaultValue} />
    );
  }
}
