import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './style'



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={8} className={classes.banner} >
          <div className={classes.headingTitle}>
              <h1 className={classes.accountHeading}>Accounts</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
