import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement } from './../actions';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';

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
          <Button
            fab
            color="primary"
            aria-label="add"
            onClick={this.handleDecrement}>
            <RemoveIcon />
          </Button>
          <span>{this.props.count}</span>
          <Button
            fab
            color="primary"
            aria-label="add"
            onClick={this.handleIncrement}>
            <AddIcon />
          </Button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = ({ counter }) => {
  return {
    count: counter.count
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
