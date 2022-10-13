import { useState, FC, ChangeEvent, EventHandler } from "react";
import { Checkbox, Container, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';

import { styled } from "@mui/material/styles";
import EditTodoForm from "./EditTodoForm";

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
    updatedAt: string
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

    const handleTodoClick = (id: string) => () => {
      console.log(`todo #${id} clicked`);
    };

    const handleEditClick = (id: string) => {
      setEditing(true);
      console.log(`edit #${id} clicked`);
    };

    const handleDeleteClick = (id: string) => {
      console.log(`delete #${id} clicked`);
    };

    const handleCancelClick = (id: string) => {
      setEditing(false);
      console.log(`cancel #${id} clicked`);
    };

    const handleConfirmClick = (id: string) => {
      setEditing(false);
      console.log(`confirm #${id} clicked`);
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
                  <IconButton edge="end" aria-label="delete" onClick={(event) => handleDeleteClick(props._id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              disablePadding >
              <StyledPaper>
                  <ListItemButton role={undefined} onClick={handleTodoClick(props._id)} dense>
                    <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={props.status === 'completed'}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': props._id }}
                        />
                    </ListItemIcon>
                    <ListItemText id={props._id} primary={text} />
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
              <IconButton edge="end" aria-label="confirm" onClick={(event) => handleConfirmClick(props._id)}>
                <DoneIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <StyledPaper>
            <EditTodoForm text={text} />
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

{/* <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem> */}

export default TodoItem;