import React from "react";
import { FC, } from "react";
import TodoItem from "./TodoItem";
import TodoItemWrapper from "./TodoItemWrapper";

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

const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <> 
        {
            todos.map((todo) => {
                return <TodoItemWrapper key={todo._id} item={React.createElement(TodoItem, todo)} />
            })
        }
        </>
    );
};

export default TodoList;