import TodoService from "../../services/api/todo.service";
import { IPoorTodo, ITodo } from "../../services/api/todo.types";
import { AppDispatch } from "../store";
import actions from "./actions"

export const loadTodos = () => (dispatch: AppDispatch) => {
    dispatch(actions.todosLoadStart());
    TodoService.getAll()
        .then(response => {
            dispatch(actions.todosLoadSuccess(response.data));
        })
        .catch(error => dispatch(actions.todosLoadError(error.message)));
};

export const deleteTodo = (id: string) => (dispatch: AppDispatch) => {
    TodoService.delete(id)
        .then(response => {
            dispatch(actions.deleteTodo(id));
            console.log(`todo #${id} deleted`);
        })
        .catch(error => console.log(error));
};

export const todoToggleComplete = (todo: ITodo) => (dispatch: AppDispatch) => {
    TodoService.toggleCompleted(todo)
        .then(response => {
            dispatch(actions.todoToggleComplete(todo));
            console.log(`todo #${todo._id} completion toggled`);
        })
        .catch(error => console.log(error));
};

export const addTodo = (todo: IPoorTodo) => (dispatch: AppDispatch) => {
    TodoService.create(todo)
        .then(response => {
            const newTodo:ITodo = response.data.todo;
            dispatch(actions.addTodo(newTodo));
            console.log(`todo with id #${newTodo._id} created`);
        })
        .catch(error => console.log(error));
};