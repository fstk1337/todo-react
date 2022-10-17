import TodoService from "../../services/api/todo.service";
import { AppDispatch } from "../store";
import actions from "./actions"

export const loadTodos = () => (dispatch: AppDispatch) => {
    dispatch(actions.todosLoadStart());
    
    TodoService.getAll()
        .then(response => dispatch(actions.todosLoadSuccess(response.data)))
        .catch(error => dispatch(actions.todosLoadError(error.message)));
};