import React from 'react';
// import { Route, Link } from 'react-router-dom';
// import { history } from './../../store';

// import Home from './Home';
// import Counter from './Counter';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const Navigation = () => (
  <div>
    <AppBar position="static" children={<h2>Test</h2>}>
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          Playground
        </Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navigation;
