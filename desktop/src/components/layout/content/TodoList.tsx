import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import TodoItem from "./TodoItem";
import api from '../../../services/api';
import { useEffect, useState } from "react";
import { PoorTodo } from "../../../services/api/todo";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../../../store/actions";

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
    const dispatch = useDispatch();
    const todos:Array<PoorTodo> = useSelector((state:Array<PoorTodo>) => state);

    const toggleCompleted = (todoId: string) => {
        const todo = {...todos[todos.findIndex((todo) => todo._id === todoId)]};
        todo.status = todo.status === 'completed' ? 'active' : 'completed';
        dispatch({type: 'TOGGLE_COMPLETED', payload: {...todo}});
    };

    const deleteTodo = (todoId: string) => {
        dispatch({type: 'DELETE_TODO', payload: { _id: todoId }});
    };

    return (
        <StyledWrapper>
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
