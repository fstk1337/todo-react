import { TodoActionType } from './actionType';
import { AnyAction } from 'redux';
import { IState } from './initialState';
import { ITodo } from '../../services/api/todo.types';

export interface TodoAction extends AnyAction {
    type: TodoActionType,
    payload: {
        todos?: ITodo[],
        todo?: ITodo,
        id?: string,
        message?: string
    }
};

const todosLoadStart = ():TodoAction => ({
    type: TodoActionType.TODOS_LOAD_START,
    payload: {}
});

const todosLoadSuccess = (response: IState):TodoAction => ({
    type: TodoActionType.TODOS_LOAD_SUCCESS,
    payload: { todos: response.todos }
});

const todosLoadError = (errorMessage: string):TodoAction => ({
    type: TodoActionType.TODOS_LOAD_ERROR,
    payload: { message: errorMessage }
});

const todoToggleComplete = (todo: ITodo):TodoAction => ({
    type: TodoActionType.TODO_TOGGLE_COMPLETE,
    payload: { todo }
});

const deleteTodo = (id: string):TodoAction => ({
    type: TodoActionType.DELETE_TODO,
    payload: { id }
});

const addTodo = (todo: ITodo):TodoAction => ({
    type: TodoActionType.ADD_TODO,
    payload: { todo }
});

export default {
    todosLoadStart,
    todosLoadSuccess,
    todosLoadError,
    todoToggleComplete,
    deleteTodo,
    addTodo
};