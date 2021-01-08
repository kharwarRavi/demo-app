import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

const GridView = ({ classes, data, handleDelete, handleClick }) => (
  <Grid item xs={4} zeroMinWidth>
    <Paper className={classes.paper}>
      <Typography variant="h6" component="h6">
        {data.userName}
        <IconButton
          size="small"
          className={classes.icon}
          onClick={() => handleClick("User", data.userName, data.userID)}
          edge="end"
          title="Edit User"
          aria-label="Edit"
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
      </Typography>
      <Box style={{ position: "absolute", top: 4, right: 4 }}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={() => handleDelete(data.userID)}
          edge="end"
          title="Delete User"
          aria-label="Delete"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {data?.taskDetails?.map((task) => (
          <ListItem key={task.taskID}>
            <ListItemText primary={task.taskName} />
            <ListItemSecondaryAction>
              <IconButton
                size="small"
                className={classes.icon}
                onClick={() => handleClick("Task", task.taskName, task.taskID)}
                edge="end"
                title="Edit Task"
                aria-label="Edit"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                size="small"
                className={classes.icon}
                onClick={() => handleDelete(task.taskID)}
                edge="end"
                title="Delete Task"
                color="secondary"
                aria-label="Delete"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <IconButton
          size="small"
          onClick={() => handleClick("Task")}
          color="primary"
          title="Add Task"
          aria-label="Add"
        >
          <AddIcon />
        </IconButton>
      </List>
    </Paper>
  </Grid>
);

export default GridView;
