import { Reducer } from "redux";
import { TodoAction } from "./actions";
import { TodoActionType } from "./actionType";
import initialState, { IState } from "./initialState";

const todoReducer = ():Reducer<IState, TodoAction> => (state = initialState, action):IState => {
    switch(action.type) {
        case TodoActionType.TODOS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                todos: [],
                errorMessage: ''
            };
        case TodoActionType.TODOS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload.todos || []
            };
        case TodoActionType.TODOS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message || ''
            };
        case TodoActionType.TODO_TOGGLE_COMPLETE:
            const todos = [...state.todos];
            const id = action.payload.todo?._id;
            return {
                ...state,
                todos: todos.map(todo => {
                    if (todo._id === id) {
                        const newStatus = todo.status === 'completed' ? 'active' : 'completed';
                        return {...todo, status: newStatus};
                    }
                    return todo;
                })
            };
        case TodoActionType.DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo._id !== action.payload.id)
            };
        case TodoActionType.ADD_TODO:
            if (action.payload.todo) {
                return {
                    ...state,
                    todos: [...state.todos, action.payload.todo] 
                };
            }
            return {...state};
        default:
            return state;
    }
};

export default todoReducer;