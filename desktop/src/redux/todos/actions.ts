import { TodoActionType } from './actionType';
import { AnyAction } from 'redux';
import { IState } from './initialState';

export interface TodoAction extends AnyAction {
    type: TodoActionType,
    payload?: any
}

const todosLoadStart = ():TodoAction => ({
    type: TodoActionType.TODOS_LOAD_START
});

const todosLoadSuccess = (response: IState):TodoAction => ({
    type: TodoActionType.TODOS_LOAD_SUCCESS,
    payload: response.todos
});

const todosLoadError = (errorMessage: string):TodoAction => ({
    type: TodoActionType.TODOS_LOAD_ERROR,
    payload: errorMessage
});

export default {
    todosLoadStart,
    todosLoadSuccess,
    todosLoadError
};

// export const createTodo = (description: string, status: string) => async(dispatch: Dispatch<TodoAction>) => {
//     const result = await api.create({ description, status })
//         .then((response) => {
//             return dispatch({
//                 type: ADD_TODO,
//                 payload: response.data.todo
//             });
//         })
//         .catch(error => console.log(error));
//     return result;
// };

// export const getAllTodos = () => async(dispatch: Dispatch<TodoAction>) => {
//     const result = await api.getAll()
//         .then((response) => {
//             return dispatch({
//                 type: GET_TODOS,
//                 payload: response.data.todos
//             });
//         })
//         .catch(error => console.log(error));
//     return result;
// };

// export const updateTodo = (_id: string, description: string, status: string) => async(dispatch: Dispatch<TodoAction>) => {
//     const result = await api.update({_id, description, status})
//         .then((response) => {
//             return dispatch({
//                 type: UPDATE_TODO,
//                 payload: response.data.todo
//             })
//         })
//         .catch(error => console.log(error));
//     return result;
// };

// export const deleteTodo = (id: string) => async(dispatch: Dispatch<TodoAction>) => {
//     const result = await api.delete(id)
//         .then((response) => {
//             return dispatch({
//                 type: DELETE_TODO,
//                 payload: response.data.todo
//             });
//         })
//         .catch(error => console.log(error));
//     return result;
// };

// export const toggleCompleted = (todo: PoorTodo) => async(dispatch: Dispatch<TodoAction>) => {
//     const result = await api.toggleCompleted(todo)
//         .then(response => {
//             return dispatch({
//                 type: TOGGLE_COMPLETED,
//                 payload: response.data.todo
//             });
//         })
//         .catch(error => console.log(error));
//     return result;
// };