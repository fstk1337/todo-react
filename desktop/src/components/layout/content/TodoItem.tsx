import { useState, FC, ChangeEvent, EventHandler, MouseEventHandler, useRef, FormEventHandler, FormEvent } from "react";
import { Checkbox, Container, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

import { styled } from "@mui/material/styles";
import EditTodoForm from "./EditTodoForm";
import api from '../../../services/api';
import { PoorTodo, Todo } from '../../../services/api/todo';

interface TodoItemProps {
    _id: string,
    category: string,
    description: string,
    priority: string,
    started?: string,
    deadline?: string,
    status: string,
    finished?: string,
    createdAt: string,
    updatedAt: string,
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

const TodoItem: FC<TodoItemProps> = (props) => {
    const [text, setText]: [string, Function] = useState(props.description);
    const [editing, setEditing]: [boolean, Function] = useState(false);

    const handleChange = (id: string) => () => {
      console.log(`todo #${id} changing text...`);
    };

    const handleEditClick = (id: string) => {
      setEditing(true);
      console.log(`edit #${id} clicked`);
    };

    const handleCancelClick = (id: string) => {
      setEditing(false);
      console.log(`cancel #${id} clicked`);
    };

    const handleConfirmClick = (event: React.FormEvent, id: string) => {
      const form = event;
      console.log(form);
      setEditing(false);
      console.log(`confirm #${id} clicked`);
    };

    const editDescription = (id: string, text: string) => {
      const todo:PoorTodo = { _id: id, description: text };
      api.update(todo)
          .then((response) => {
              console.log(response.data.todo);
          })
          .catch((error) => {
              console.log(error);
          });
    };


    const handleSubmit:FormEventHandler = (event: FormEvent) => {
      event.preventDefault();
      editDescription(props._id, text);
      console.log('submit');
    };

    if (!editing)

    return (
        <StyledWrapper>
          <ListItem
              key={props._id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(props._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={(id) => props.onDeleteClick(props._id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              disablePadding >
              <StyledPaper>
                  <ListItemButton role={undefined} onClick={(id) => props.onTodoClick(props._id)} dense>
                    <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={props.status === 'completed'}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': props._id }}
                        />
                    </ListItemIcon>
                    <ListItemText
                        id={props._id}
                        primary={text}
                        primaryTypographyProps={{fontSize: '16px'}}
                    />
                  </ListItemButton>
              </StyledPaper>
          </ListItem>
        </StyledWrapper>
    );

    return (
      <StyledWrapper>
        <ListItem
          key={props._id}
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="cancel" onClick={(event) => handleCancelClick(props._id)}>
                <CancelIcon />
              </IconButton>
              <IconButton edge="end" aria-label="confirm" form={`form-${props._id}`} name="submit" type="submit" onSubmit={(event: React.FormEvent) => handleConfirmClick(event, props._id)}>
                <DoneIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <StyledPaper>
            <EditTodoForm id={`form-${props._id}`} text={text} onSubmit={handleSubmit} />
          </StyledPaper>
        </ListItem>
      </StyledWrapper>
    );
};

TodoItem.defaultProps = {
  category: 'general',
  priority: 'normal',
  started: '',
  deadline: '',
  status: 'active',
  finished: ''
};

export default TodoItem;