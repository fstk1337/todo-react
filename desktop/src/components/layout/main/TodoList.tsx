import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { deleteTodo, loadTodos, todoToggleComplete } from "../../../redux/todos/thunks";
import { useAppSelector, useAppDispatch } from "../../../redux/store/hooks";
import { ITodo } from "../../../services/api/todo.types";
import { RootState } from "../../../redux/store";

const StyledWrapper = styled(Container)`
    padding: 20px;
    width: 500px;
    min-height: 60px;
    border: 1px solid #ccc;
    border-radius: 20px;
    align-items: center;
    background: #ddd;
`;

const StatusMessage = styled('h4')`
    color: brown;
`

const TodoList = () => {
    const dispatch = useAppDispatch();
    const {isLoading, todos} = useAppSelector((state:RootState) => state);

    useEffect(() => {
        dispatch(loadTodos());
    }, []);

    const handleTodoClick = (todo: ITodo) => dispatch(todoToggleComplete(todo));
    const handleDeleteClick = (id: string) => dispatch(deleteTodo(id));

    return (
        <StyledWrapper>
            { isLoading ? <StatusMessage>Loading...</StatusMessage>
                :todos.length === 0 && <StatusMessage>Today you have nothing to do.</StatusMessage>
            }
            { todos.map((todo) => {
                return <TodoItem 
                    key={todo._id} 
                    item={todo}
                    onTodoClick={(todo: ITodo) => handleTodoClick(todo)}
                    onDeleteClick={(id: string) => handleDeleteClick(id)}
                />
            }) }
        </StyledWrapper>
    );
};

export default TodoList;