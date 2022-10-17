import { IPoorTodo } from "../../services/api/todo.types";

export interface IState {
    isLoading: boolean,
    todos: IPoorTodo[]
    errorMessage: string
};

const initialState:IState = {
    isLoading: false,
    todos: [],
    errorMessage: ''
}

export default initialState;