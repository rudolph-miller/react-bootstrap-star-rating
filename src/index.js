require('bootstrap-star-rating/js/star-rating');
import $ from 'jquery';
import React, { Component, PropTypes } from 'react';
import { Seq, toJS } from 'immutable';

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

const pluginEventPropTypes = Seq(pluginEvents).map((_) => {
  return PropTypes.func;
}).toJS();

export default class StarRating extends Component {
  static propTypes = {
    ...pluginOptionPropTypes,
    ...pluginEventPropTypes,
    defaultValue: PropTypes.number
  }

  componentDidMount() {
    const options = Seq(pluginOptionPropTypes).map((_, key) => {
      return this.props[key];
    }).filter(value => {
      if (typeof value != 'undefined')
        return true;
      return false;
    }).toJS();
    this.$node.rating(options);
    Seq(pluginEvents).forEach((key, name) => {
      if (this.props[key])
        this.$node.on(name, this.props[key]);
      return true;
    });
  }

  componentWillUnmount() {
    Seq(pluginEvents).forEach((key, name) => {
      if (this.props[key])
        this.$node.off(name, this.props[key]);
      return true;
    });
  }

  render() {
    return (
      <input
        ref={node => { this.$node = $(node); }}
        defaultValue={this.props.defaultValue} />
    );
  }

  /* http://plugins.krajee.com/star-rating#methods */

  update(value) {
    this.$node.rating('update', value);
  }

  refresh(options) {
    this.$node.rating('refresh', options);
  }

  reset() {
    this.$node.rating('reset');
  }

  clear() {
    this.$node.rating('clear');
  }

  destroy() {
    this.$node.rating('destroy');
  }

  create() {
    this.$node.rating('create');
  }
}
