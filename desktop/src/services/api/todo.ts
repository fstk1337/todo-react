import { AxiosInstance } from "axios";
const URL = '/todos';

interface Todo {
    _id: string,
    category: string,
    description: string,
    priority: string,
    started?: string,
    deadline?: string,
    status: string,
    finished?: string,
    createdAt: string,
    updatedAt: string
};

const todoModule = (instance: AxiosInstance) => {
    return {
        getAll() {
            return instance.get(`${URL}`);
        },
        get(todoId: string) {
            return instance.get(`${URL}/${todoId}`);
        },
        create(payload: Todo) {
            return instance.post(`${URL}`, payload);
        },
        update(payload: Todo) {
            return instance.put(`${URL}`, payload);
        },
        delete(todoId: string) {
            return instance.delete(`${URL}/${todoId}`);
        }
    };
};

export default todoModule;
