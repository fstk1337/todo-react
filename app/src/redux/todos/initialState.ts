import { ITodo } from "../../services/api/todo.types";

export interface IState {
    isLoading: boolean,
    todos: ITodo[]
    errorMessage: string
};

const initialState:IState = {
    isLoading: false,
    todos: [],
    errorMessage: ''
}

export default initialState;