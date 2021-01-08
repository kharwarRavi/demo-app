import React from "react";
import { Grid, Paper } from "@material-ui/core";

const GridView = ({classes}) => (
  <Grid item xs={4} zeroMinWidth>
    <Paper className={classes.paper}>xs</Paper>
  </Grid>
);

export default GridView;
