import { FC, ReactElement } from "react";
import TodoItemWrapper from "./TodoItemWrapper";

interface TodoListProps {
    todos: Array<ReactElement>
};

const TodoList: FC<TodoListProps> = (props) => {

    return (
        <>
            {props.todos.map(todo => 
                <TodoItemWrapper key={todo.props.id} item={todo} />
            )}
        </>
    );
};

export default TodoList;