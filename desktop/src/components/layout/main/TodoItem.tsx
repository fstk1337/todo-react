import { useState, FC, ChangeEvent, EventHandler, FormEventHandler, FormEvent } from "react";
import { useAppDispatch } from "../../../redux/store/hooks";
import { editTodoDescription } from "../../../redux/todos/thunks";
import { ITodo } from "../../../services/api/todo.types";

import { styled } from "@mui/material/styles";
import { Checkbox, Container, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ConfirmDeleteDialog from "../../modal/ConfirmDeleteDialog";
import EditTodoModal from "../../modal/EditTodoModal";

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


const TodoItem: FC<TodoItemProps> = (props) => {
    const todo = {...props.item };

	const [text, setText] = useState<string>(todo.description);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleInputChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const confirmEdit: FormEventHandler = (event: FormEvent) => {
		event.preventDefault();
		dispatch(editTodoDescription(todo._id, text));
		setEditOpen(false);
	}
	
	const cancelEdit = () => {
		setText(todo.description);
		setEditOpen(false);
	}

	const confirmDelete = () => {
		props.onDeleteClick(props.item._id);
		setDeleteOpen(false);
	};

	const cancelDelete = () => {
		setDeleteOpen(false);
	};

    return (
        <StyledWrapper>
          <ListItem
              key={todo._id}
              disablePadding
              secondaryAction={
                <>
                  <IconButton
				  	edge="end"
					aria-label="edit"
					onClick={(event) => setEditOpen(true)}
				  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
				     edge="end"
					 aria-label="delete"
					 onClick={(event) => setDeleteOpen(true)}
				  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
			>
              <StyledPaper>
                  <ListItemButton
				  	role={undefined}
					onClick={(event) => props.onTodoClick(props.item)}
					dense
				  >
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
          </ListItem>
          <EditTodoModal
            isOpen={editOpen}
            id={todo._id}
			description={text}
			onChange={handleInputChange}
			onConfirm={confirmEdit}
			onReject={cancelEdit}
          />
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