import { ChangeEvent, EventHandler, FC, FormEventHandler, MouseEventHandler } from "react";

import { Modal, Backdrop, Button, Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import EditTodoInput from "../input/EditTodoInput";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 80px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 30px 40px;
`;

const StyledForm = styled('form')`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`;

const StyledHeading = styled('h2')`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
`;

interface EditTodoModalProps {
    id: string,
    description: string,
    isOpen: boolean
    onConfirm: FormEventHandler<HTMLFormElement>,
    onReject: MouseEventHandler<HTMLButtonElement>
    onChange: EventHandler<ChangeEvent>
}

const EditTodoModal:FC<EditTodoModalProps> = (props) => {
    return (
        <Modal
                open={props.isOpen}
                onClose={props.onReject}
                aria-describedby={`form-${props.id}`}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
            <StyledBox>
                <StyledHeading>
                  You can now edit this todo
                </StyledHeading>
                <StyledForm id={`form-${props.id}`} onSubmit={props.onConfirm}>
                    <EditTodoInput text={props.description} onChange={props.onChange} />
                    <Stack direction={'row'} columnGap={'10px'}>
                      <Button variant='contained' form={`form-${props.id}`} type='submit' color='primary' autoFocus>Confirm</Button>
                      <Button variant='outlined' color='secondary' onClick={props.onReject}>Cancel</Button>
                    </Stack>
                </StyledForm>
            </StyledBox>
        </Modal>
    );
};

export default EditTodoModal;