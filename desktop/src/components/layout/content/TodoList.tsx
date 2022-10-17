import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoItem from "./TodoItem";
import { IState } from "../../../redux/todos/initialState";
import { useEffect } from "react";
import { loadTodos } from "../../../redux/todos/thunks";
import { useAppSelector, useAppDispatch } from "../../../redux/store/hooks";
import store from "../../../redux/store";

interface Todo {
    "_id": string,
    "category": string,
    "description": string,
    "priority": string,
    "started": string,
    "deadline": string,
    "status": string,
    "finished": string,
    "createdAt": string,
    "updatedAt": string
}

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

    const toggleCompleted = (todoId: string) => {
    };

    const deleteTodo = (todoId: string) => {
    };

    return (
        <StyledWrapper>
            { isLoading && <h3>Loading...</h3> }
            {
                todos.map((todo) => {
                    return <TodoItem 
                        key={todo._id} 
                        id={todo._id}
                        onTodoClick={(id: string) => toggleCompleted(id)}
                        onDeleteClick={(id: string) => deleteTodo(id)}
                    />
                })
            }
        </StyledWrapper>
    );
};

export default TodoList;
