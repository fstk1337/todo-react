import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/store/hooks";
import { deleteTodo, loadTodos, todoToggleComplete } from "../../../redux/todos/thunks";
import { RootState } from "../../../redux/store";
import { ITodo } from "../../../services/api/todo.types";

import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';

import TodoItem from "./TodoItem";

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
    const {isLoading, todos} = useAppSelector((state:RootState) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, []);

    return (
        <StyledWrapper>
            { isLoading ? <StatusMessage>Loading...</StatusMessage>
                : todos.length === 0 && <StatusMessage>Today you have nothing to do.</StatusMessage>
            }
            { todos.map((todo) => {
                return <TodoItem 
                    key={todo._id} 
                    item={todo}
                    onTodoClick={(todo: ITodo) => dispatch(todoToggleComplete(todo))}
                    onDeleteClick={(id: string) => dispatch(deleteTodo(id))}
                />
            }) }
        </StyledWrapper>
    );
};

export default TodoList;