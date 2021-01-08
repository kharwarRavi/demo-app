import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Button, Box } from "@material-ui/core";
import GridView from "../components/GridView";
import AddIcon from "@material-ui/icons/Add";
import { userBoardsData } from "../constants";
import _ from "underscore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [userBoards, setUserBoards] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const handleAddClick = () => {
    setShowDialog(true);
  };

  const addUser = (user) => {
    if (user && !_.isEmpty(user)) {
        setUserBoards([...userBoards, ...user]);
        userBoardsData.push(user);
        setShowDialog(false);
    } else {
        // TODO: display message
    }
  };

  useEffect(() => {
    setUserBoards(userBoardsData);
  }, []);

  return (
    <div className={classes.root}>
      <Box mb={3} align="right">
        <Button
          variant="contained"
          onClick={handleAddClick}
          title="Add User"
          color="primary"
        >
          <AddIcon /> ADD
        </Button>
      </Box>
      <Grid container alignItems="center" spacing={3}>
        {userBoards?.map((item) => (
          <GridView data={item} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
