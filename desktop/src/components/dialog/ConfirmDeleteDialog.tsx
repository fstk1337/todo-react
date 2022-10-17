import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FC, MouseEventHandler } from "react";

interface ConfirmDeleteDialogProps {
    isOpen: boolean,
    description: string,
    onConfirm: MouseEventHandler<HTMLButtonElement>,
    onReject: MouseEventHandler<HTMLButtonElement>
}

const ConfirmDeleteDialog:FC<ConfirmDeleteDialogProps> = (props) => {

    return (
        <div>
            <Dialog
                open={props.isOpen}
                onClose={props.onReject}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
            >
                <DialogTitle id='dialog-title'>
                    Do you really want to delete this todo?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description'>
                        { props.description }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='primary' onClick={props.onConfirm} autoFocus>Delete</Button>
                    <Button variant='outlined' color='secondary' onClick={props.onReject}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConfirmDeleteDialog;