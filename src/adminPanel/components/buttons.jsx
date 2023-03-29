import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Buttons({ id, handleOpenChange, handleDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = (id) => {
    setOpen(true);
  };
  const handleCloseModal = (e) => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="table-btn font-main"
        variant="text"
        onClick={() => handleOpenChange(id)}
      >
        Изменить
      </Button>
      <Button
        className="table-btn font-main"
        variant="text"
        onClick={() => handleOpenModal(id)}
      >
        Удалить
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className="modal-content">
          <DialogTitle className="font-main modal-title">
            Вы уверены что хотите удалить новость?
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-slide-description"
              className="DialogContentText"
            >
              Это действие нельзя отменить
            </DialogContentText>
          </DialogContent>
        </Box>
        <DialogActions>
          <Button
            id="1"
            className="modal-btn font-main btn-cancel"
            onClick={handleCloseModal}
          >
            Отменить
          </Button>
          <Button
            id="2"
            className="btn-delete modal-btn font-main"
            onClick={() => handleDelete(id)}
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
