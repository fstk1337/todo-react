import React, { useState, FC, ChangeEvent, EventHandler, FormEventHandler, FormEvent } from "react";
import { Backdrop, Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

import { styled } from "@mui/material/styles";
import EditTodoInput from "../../input/EditTodoInput";
import { useAppDispatch } from "../../../redux/store/hooks";
import ConfirmDeleteDialog from "../../dialog/ConfirmDeleteDialog";
import { ITodo } from "../../../services/api/todo.types";
import { editTodoDescription } from "../../../redux/todos/thunks";

interface TodoItemProps {
    item: ITodo,
    onTodoClick: Function,
    onDeleteClick: Function
};

const StyledWrapper = styled(Container)`
    margin: 0;
    padding: 5px;
    width: 100%;
    align-items: center;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  min-height: 50px;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 80px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 4px;
`;

const StyledForm = styled('form')`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
  width: 100%;
`;

const TodoItem: FC<TodoItemProps> = (props) => {
    const dispatch = useAppDispatch();
    const todo = {...props.item };
    const [text, setText] = useState(todo.description);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const [editing, setEditing]: [boolean, Function] = useState(false);

    const handleEditClick = (id: string) => {
      setEditOpen(true);
      setEditing(true);
    };

    const handleCancelClick = (id: string) => {
      setText(todo.description);
    };

    const handleChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event: FormEvent) => {
      event.preventDefault();
      dispatch(editTodoDescription(todo._id, text));
      setEditing(false);
      setEditOpen(false);
  }

  const confirmDelete = () => {
      props.onDeleteClick(props.item._id);
      setDeleteOpen(false);
  };

  const cancelDelete = () => {
      setDeleteOpen(false);
  };

  const cancelEdit = () => {
    setText(todo.description);
    setEditing(false);
    setEditOpen(false);
  }

    return (
        <StyledWrapper>
          <ListItem
              key={todo._id}
              secondaryAction={ !editing &&
                <>
                  <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(todo._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={(event) => setDeleteOpen(true)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              disablePadding >
              <StyledPaper>
                  <ListItemButton role={undefined} onClick={(event) => props.onTodoClick(props.item)} dense>
                    <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={todo.status === 'completed'}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': todo._id }}
                        />
                    </ListItemIcon>
                    <ListItemText
                        id={todo._id}
                        primary={todo.description}
                        primaryTypographyProps={{fontSize: '16px'}}
                    />
                  </ListItemButton>
              </StyledPaper>
              <Modal
                open={editOpen}
                onClose={cancelEdit}
                aria-describedby={`form-${todo._id}`}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <StyledBox>
                    <StyledForm id={`form-${todo._id}`} onSubmit={handleSubmit}>
                      <EditTodoInput text={text} onChange={(event: ChangeEvent) => handleChange(event)} />
                      <Button variant='contained' form={`form-${todo._id}`} type='submit' color='primary' autoFocus>Confirm</Button>
                      <Button variant='outlined' color='secondary' onClick={cancelEdit}>Cancel</Button>
                    </StyledForm>
                </StyledBox>
              </Modal>
          </ListItem>
          <ConfirmDeleteDialog
            isOpen={deleteOpen}
            description={todo.description}
            onConfirm={confirmDelete}
            onReject={cancelDelete}
          />
        </StyledWrapper>
    );
};

export default TodoItem;