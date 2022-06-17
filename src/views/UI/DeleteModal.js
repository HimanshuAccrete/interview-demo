import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { dataCtx } from "../../context/DataContext";

export default function Modal(props) {
  const { open, handleClose, row } = props;

  const { handleDelete } = useContext(dataCtx);

  const showDeleteConfirmation = () => {
    handleDelete(row);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="modal">
        <DialogTitle style={{ cursor: "move" }} id="modal">
          Delete User
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {row.name}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={showDeleteConfirmation}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
