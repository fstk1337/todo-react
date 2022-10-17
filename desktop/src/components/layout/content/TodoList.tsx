import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoItem from "./TodoItem";
import { IState } from "../../../redux/todos/initialState";
import { useEffect } from "react";
import { deleteTodo, loadTodos, todoToggleComplete } from "../../../redux/todos/thunks";
import { useAppSelector, useAppDispatch } from "../../../redux/store/hooks";
import { ITodo } from "../../../services/api/todo.types";

const StyledWrapper = styled(Container)`
    padding: 20px;
    width: 500px;
    min-height: 60px;
    border: 1px solid #ccc;
    border-radius: 20px;
    align-items: center;
    background: #ddd;
`;

const EmptyListMessage = styled(Typography)`
    color: brown;
`

const TodoList = () => {
    const dispatch = useAppDispatch();
    const {isLoading, todos, errorMessage} = useAppSelector((state:IState) => state);

    useEffect(() => {
        dispatch(loadTodos());
    }, []);

    const handleTodoClick = (todo: ITodo) => dispatch(todoToggleComplete(todo));

    const handleDeleteClick = (id: string) => dispatch(deleteTodo(id));

    return (
        <StyledWrapper>
            { isLoading ? <h3>Loading...</h3>
                :todos.length === 0 && <EmptyListMessage>Today you have nothing to do</EmptyListMessage>
            }
            {
                todos.map((todo) => {
                    return <TodoItem 
                        key={todo._id} 
                        item={todo}
                        onTodoClick={(todo: ITodo) => handleTodoClick(todo)}
                        onDeleteClick={(id: string) => handleDeleteClick(id)}
                    />
                })
            }
        </StyledWrapper>
    );
};

export default TodoList;