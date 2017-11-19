import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

import Paper from 'material-ui/Paper';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

import { fetchSuperheroes } from './../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.fetchSuperheroes();
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

Home.propTypes = {
  data: PropType.array.isRequired,
  fetchSuperheroes: PropType.func.isRequired
};

const mapStateToProps = ({ superheroes }) => {
  return {
    data: superheroes.data
  };
};

export default connect(mapStateToProps, {
  fetchSuperheroes
})(Home);
