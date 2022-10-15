import { useState, FC, ChangeEvent, EventHandler, MouseEventHandler, useRef, FormEventHandler, FormEvent } from "react";
import { Checkbox, Container, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

import { styled } from "@mui/material/styles";
import { PoorTodo } from '../../../services/api/todo';
import { useDispatch, useSelector } from "react-redux";
import EditTodoInput from "../../input/EditTodoInput";

interface TodoItemProps {
    id: string,
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

const StyledForm = styled('form')`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 30px;
    width: 100%;
`;

const TodoItem: FC<TodoItemProps> = (props) => {
    const dispatch = useDispatch();
    const todo: PoorTodo = useSelector((state: Array<PoorTodo>) => {
      const index = state.findIndex((todo: PoorTodo) => todo._id === props.id);
      return state[index];
    });
    const [text, setText] = useState(todo.description);
    const [editing, setEditing]: [boolean, Function] = useState(false);

    const handleEditClick = (id: string) => {
      setEditing(true);
      console.log(`edit #${id} clicked`);
    };

    const handleCancelClick = (id: string) => {
      setText(todo.description);
      setEditing(false);
      console.log(`cancel #${id} clicked`);
    };

    const handleChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event: FormEvent) => {
      event.preventDefault();
      const newTodo:PoorTodo = {...todo, description: text};
      dispatch({type: 'UPDATE_TODO', payload: {...newTodo}});
      setEditing(false);
      console.log('submit');
  }

   

    if (!editing)

    return (
        <StyledWrapper>
          <ListItem
              key={todo._id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(todo._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={(id) => props.onDeleteClick(todo._id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              disablePadding >
              <StyledPaper>
                  <ListItemButton role={undefined} onClick={(id) => props.onTodoClick(todo._id)} dense>
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
          key={todo._id}
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="cancel" onClick={(event) => handleCancelClick(todo._id)}>
                <CancelIcon />
              </IconButton>
              <IconButton edge="end" aria-label="confirm" form={`form-${todo._id}`} name="submit" type="submit">
                <DoneIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <StyledPaper>
            <StyledForm id={`form-${todo._id}`} onSubmit={handleSubmit}>
              <EditTodoInput text={text} onChange={(event: ChangeEvent) => handleChange(event)} />
            </StyledForm>
          </StyledPaper>
        </ListItem>
      </StyledWrapper>
    );
};

export default TodoItem;