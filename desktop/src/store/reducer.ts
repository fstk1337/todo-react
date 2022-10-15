import { Reducer } from "redux";
import { PoorTodo } from "../services/api/todo";
import { TodoAction } from "./actions";
import { ADD_TODO, GET_TODOS, UPDATE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from "./actions";

const initialState: Array<PoorTodo> = [];

const todoReducer = (todos = initialState, action: TodoAction) => {
    const { type, payload } = action;
    switch(type) {
        case ADD_TODO:
            console.log('add payload', payload);
            return [...todos, payload];
        case GET_TODOS:
            return [...todos];
        case UPDATE_TODO:
            return todos.map((todo) => {
                if (todo._id === payload._id) {
                    return {...todo, ...payload};
                };
                return todo;
            });
        case TOGGLE_COMPLETED:
            console.log('toggle completed payload', payload);
            return todos.map((todo) => {
                if (todo._id === payload._id) {
                    return {...todo, ...payload};
                };
                return todo;
            });
        case DELETE_TODO:
            console.log('delete payload', payload);
            return todos.filter(({ _id }) => _id !== payload._id);
        default:
            return todos;
    }
};

export default todoReducer;