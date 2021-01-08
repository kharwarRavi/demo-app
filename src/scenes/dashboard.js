import React, { useState, useEffect } from "react";
import { makeStyles, Grid, Button, Box } from "@material-ui/core";
import GridView from "../components/GridView";
import AddIcon from "@material-ui/icons/Add";
import { userBoardsData } from "../constants";
import _ from "underscore";
import DialogBox from "../components/DialogBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    backgroundColor: "#f2f4f8",
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#000000",
    position: "relative",
  },
  icon: {},
}));

const Dashboard = () => {
  const classes = useStyles();
  const [userBoards, setUserBoards] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [details, setDetails] = useState({
    title: "Add User",
    label: "User Name",
    key: "user",
  });

  const handleClick = (key, value = null, id) => {
    const data = {
      title: `${value ? "Edit" : "Add"} ${key}`,
      label: `${key} Name`,
      key: key.toLowerCase(),
    };
    if (value && id) {
      data["value"] = value;
      data[id] = id;
    }
    setDetails(() => ({ ...data }));
    setShowDialog(true);
  };

  const addUser = (user) => {
    if (user && !_.isEmpty(user)) {
      setUserBoards([...userBoards, ...user]);
      userBoardsData.push(user);
      setShowDialog(false);
      setDetails({});
    } else {
      // TODO: display message
    }
  };

  const handleDelete = (id) => {
    let searchIndex = -1;
    searchIndex = userBoards?.findIndex((user) => user.userID === id);
    if (searchIndex < 0) {
      userBoards?.forEach((user) => {
        searchIndex = user.taskDetails?.findIndex((task) => task.taskID === id);
        if (searchIndex > -1) {
          const newData = userBoards?.map((user) =>
            user.taskDetails?.filter((task) => task.taskID !== id)
          );
          //   setUserBoards();
          return;
        }
      });
      console.log("searchIndex", searchIndex);
    } else {
      setUserBoards([...userBoards?.filter((user) => user.userID !== id)]);
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
          size="small"
          onClick={() => handleClick("User")}
          title="Add User"
          color="primary"
        >
          <AddIcon /> ADD
        </Button>
      </Box>
      <Grid container alignItems="center" spacing={3}>
        {userBoards?.map((item) => (
          <GridView
            data={item}
            key={item.userID}
            classes={classes}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </Grid>
      <DialogBox
        details={details}
        open={showDialog}
        handleClose={setShowDialog}
        handle={addUser}
      />
    </div>
  );
};

export default Dashboard;
