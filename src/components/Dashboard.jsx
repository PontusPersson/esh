import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Trip from './Trip';

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Grid className={'dashboardGrid'}>
          <Trip />
        </Grid>
      </div>
    );
  }
}