import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from './../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.fetchWeather();
  }

  render() {
    return <h2>Weather Today</h2>;
  }
}

const mapStateToProps = ({ weather }) => {
  return {};
};

export default connect(mapStateToProps, {
  fetchWeather
})(Home);
