import { FC, MouseEventHandler } from "react";

import { styled } from "@mui/material/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface ConfirmDeleteDialogProps {
    isOpen: boolean,
    description: string,
    onConfirm: MouseEventHandler<HTMLButtonElement>,
    onReject: MouseEventHandler<HTMLButtonElement>
}

const StyledTitle = styled(DialogTitle)`
    font-weight: 500;
    font-size: 22px;
`;

const StyledContentText = styled(DialogContentText)`
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
`;

const ConfirmDeleteDialog:FC<ConfirmDeleteDialogProps> = (props) => {

    return (
        <Dialog
            open={props.isOpen}
            onClose={props.onReject}
            aria-labelledby='dialog-title'
            aria-describedby='dialog-description'
        >
            <StyledTitle id='dialog-title'>
                Do you really want to delete this todo?
            </StyledTitle>
            <DialogContent>
                <StyledContentText id='dialog-description'>
                    { props.description }
                </StyledContentText>
            </DialogContent>
            <DialogActions sx={{padding: '20px'}}>
                <Button variant='contained' color='primary' onClick={props.onConfirm} autoFocus>Delete</Button>
                <Button variant='outlined' color='secondary' onClick={props.onReject}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDeleteDialog;