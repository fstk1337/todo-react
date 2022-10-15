export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

import { AnyAction, Dispatch } from 'redux';
import api from '../services/api';
import { PoorTodo, Todo } from '../services/api/todo';

export interface TodoAction extends AnyAction {
    type: string,
    payload: PoorTodo
}

export const createTodo = (description: string, status: string) => async(dispatch: Dispatch<TodoAction>) => {
    const result = await api.create({ description, status })
        .then((response) => {
            return dispatch({
                type: ADD_TODO,
                payload: response.data.todo
            });
        })
        .catch(error => console.log(error));
    return result;
};

export const getAllTodos = () => async(dispatch: Dispatch<TodoAction>) => {
    const result = await api.getAll()
        .then((response) => {
            return dispatch({
                type: GET_TODOS,
                payload: response.data.todos
            });
        })
        .catch(error => console.log(error));
    return result;
};

export const updateTodo = (_id: string, description: string, status: string) => async(dispatch: Dispatch<TodoAction>) => {
    const result = await api.update({_id, description, status})
        .then((response) => {
            return dispatch({
                type: UPDATE_TODO,
                payload: response.data.todo
            })
        })
        .catch(error => console.log(error));
    return result;
};

export const deleteTodo = (id: string) => async(dispatch: Dispatch<TodoAction>) => {
    const result = await api.delete(id)
        .then((response) => {
            return dispatch({
                type: DELETE_TODO,
                payload: response.data.todo
            });
        })
        .catch(error => console.log(error));
    return result;
};

export const toggleCompleted = (todo: PoorTodo) => async(dispatch: Dispatch<TodoAction>) => {
    const result = await api.toggleCompleted(todo)
        .then(response => {
            return dispatch({
                type: TOGGLE_COMPLETED,
                payload: response.data.todo
            });
        })
        .catch(error => console.log(error));
    return result;
};