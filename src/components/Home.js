import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import { fetchWeather } from './../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.fetchWeather();
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Superheroes</h1>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n._id}>
                    <TableCell>{n._id}</TableCell>
                    <TableCell>{n.name}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return {
    data: weather.superheroes
  };
};

export default connect(mapStateToProps, {
  fetchWeather
})(Home);
