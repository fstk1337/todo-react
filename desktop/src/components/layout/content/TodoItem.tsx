import { useState, FC } from "react";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from "@mui/material/styles";

export interface TodoItemProps {
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

interface CheckedItem {
    id: string
};

const StyledPaper = styled(Paper)`
    display: block;
    width: 100%;
    border-radius: 15px;
`;

const TodoItem: FC<TodoItemProps> = (props) => {
    const [checked, setChecked]: [Array<CheckedItem>, Function] = useState([]);

    const handleTodoClick = (id: string) => () => {
      const currentIndex = checked.findIndex((todo) => todo.id === id);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push({id});
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
      console.log(`todo #${id} clicked`);
    };

    const handleEditClick = (id: string) => {
      console.log(`edit #${id} clicked`);
    };

    const handleDeleteClick = (id: string) => {
      console.log(`delete #${id} clicked`);
    };

    return (
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
                  <ListItemText id={props._id} primary={ props.description } />
                </ListItemButton>
            </StyledPaper>
        </ListItem>
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