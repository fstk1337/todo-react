import { createStore } from "redux";
import todoReducer from "./reducer";
import api from "../services/api";

const getInitialTodos = () => {
    const result = api.getAll()
        .then(async response => {
            const data = await response.data;
            return data.todos;
        })
        .catch(error => console.log(error));
    return result;
}

const store = createStore(
    todoReducer,
    await getInitialTodos()
);

export default store;