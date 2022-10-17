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
                todos: action.payload
            };
        case TodoActionType.TODOS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default todoReducer;

//const todoReducer = (todos = initialState, action: TodoAction) => {
//     const { type, payload } = action;
//     switch(type) {
//         case ADD_TODO:
//             console.log('add payload', payload);
//             return [...todos, payload];
//         case GET_TODOS:
//             return [...todos];
//         case UPDATE_TODO:
//             return todos.map((todo) => {
//                 if (todo._id === payload._id) {
//                     return {...todo, ...payload};
//                 };
//                 return todo;
//             });
//         case TOGGLE_COMPLETED:
//             console.log('toggle completed payload', payload);
//             return todos.map((todo) => {
//                 if (todo._id === payload._id) {
//                     return {...todo, ...payload};
//                 };
//                 return todo;
//             });
//         case DELETE_TODO:
//             console.log('delete payload', payload);
//             return todos.filter(({ _id }) => _id !== payload._id);
//         default:
//             return todos;
//     }
// };