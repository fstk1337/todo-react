import { AxiosInstance } from "axios";
const URL = '/todos';

export interface PoorTodo {
    _id: string,
    description: string
}

export interface Todo extends PoorTodo {
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
        create(payload: PoorTodo) {
            return instance.post(`${URL}`, payload);
        },
        update(payload: PoorTodo) {
            return instance.patch(`${URL}/${payload._id}`, payload);
        },
        delete(todoId: string) {
            return instance.delete(`${URL}/${todoId}`);
        }
    };
};

export default todoModule;
