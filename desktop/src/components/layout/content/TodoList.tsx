import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { FC, MouseEventHandler } from "react";
import TodoItem from "./TodoItem";
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { ApiOutlined } from "@mui/icons-material";

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
    border: 1px solid #ccc;
    border-radius: 20px;
    align-items: center;
    background: #11ccdd;
`;

const TodoList = () => {
    const [todos, setTodos]: [Array<Todo>, Function] = useState([]);

    const getTodos = () => {
        api.getAll()
        .then((response) => {
            const data = response.data.todos;
            setTodos(data);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    const toggleCompleted = (todoId: string) => {
        const todo = {...todos[todos.findIndex((todo) => todo._id === todoId)]};
        todo.status = todo.status === 'completed' ? 'active' : 'completed';
        api.update(todo)
            .then((response) => {
                getTodos();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteTodo = (todoId: string) => {
        api.delete(todoId)
            .then((response) => {
                getTodos();
            })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <StyledWrapper> 
            {
                todos.map((todo) => {
                    return <TodoItem {...todo}
                        key={todo._id} 
                        onTodoClick={(id: string) => toggleCompleted(id)}
                        onDeleteClick={(id: string) => deleteTodo(id)}
                    />
                })
            }
        </StyledWrapper>
    );
};

export default TodoList;