import { AxiosInstance } from "axios";
import instance from "./axios.instance";
import { IPoorTodo, ITodo } from "./todo.types";
const URL = '/todos';

class TodoService {
    getAll = () => instance.get(URL);
    get = (id: string) => instance.get(`${URL}/${id}`);
    create = (payload: IPoorTodo) => instance.post(URL, payload);
    update = (payload: IPoorTodo) => instance.patch(`${URL}/${payload._id}`, payload);
    delete = (id: string) => instance.delete(`${URL}/${id}`);
    toggleCompleted = (payload: IPoorTodo) => {
        const newStatus = payload.status === 'completed' ? 'active' : 'completed';
        return instance.patch(`${URL}/${payload._id}`, {...payload, status: newStatus});
    };
};

export default new TodoService() as TodoService;