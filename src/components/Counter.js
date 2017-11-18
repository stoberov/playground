import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement } from './../actions';

class Counter extends Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.handleDecrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = ({ counter }) => {
  return {
    count: counter.count
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
