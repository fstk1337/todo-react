import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { FC } from "react";
import TodoItem from "./TodoItem";

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

interface TodoListProps {
    todos: Array<Todo>
};

const StyledWrapper = styled(Container)`
    padding: 20px;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 20px;
    align-items: center;
    background: #11ccdd;
`;

const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <StyledWrapper> 
            {
                todos.map((todo) => {
                    return <TodoItem key={todo._id} {...todo} />
                })
            }
        </StyledWrapper>
    );
};

export default TodoList;