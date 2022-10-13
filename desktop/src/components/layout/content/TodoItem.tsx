import { useState, FC } from "react";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from "@mui/material/styles";

interface TodoItemProps {
    id: number,
    text: string,
    active?: boolean,
    completed?: boolean
};

const StyledPaper = styled(Paper)`
    display: block;
    width: 100%;
    border-radius: 15px;
`;

const TodoItem: FC<TodoItemProps> = (props) => {
    const [checked, setChecked] = useState([0]);

    const handleTodoClick = (id: number) => () => {
      const currentIndex = checked.indexOf(id);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(id);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
      console.log(`todo #${id} clicked`);
    };

    const handleEditClick = (id: number) => {
      console.log(`edit #${id} clicked`);
    };

    const handleDeleteClick = (id: number) => {
      console.log(`delete #${id} clicked`);
    };

    return (
        <ListItem
            key={props.id}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(props.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={(event) => handleDeleteClick(props.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
            disablePadding >
            <StyledPaper>
                <ListItemButton role={undefined} onClick={handleTodoClick(props.id)} dense>
                  <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(props.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': props.id.toString() }}
                      />
                  </ListItemIcon>
                  <ListItemText id={props.id.toString()} primary={ props.text } />
                </ListItemButton>
            </StyledPaper>
        </ListItem>
    );
};

TodoItem.defaultProps = {
  active: true,
  completed: false
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