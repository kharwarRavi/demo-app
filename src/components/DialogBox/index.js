import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const DialogBox = ({ open, details, handleClose, handleSave }) => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
      setName(details?.value || "")
  }, [details])

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth="sm"
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="responsive"
    >
      <DialogTitle id="responsive">{details.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={name}
          onChange={(event) => setName(() => event.target.value.trim())}
          label={details.label}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleSave(details.key, name)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
