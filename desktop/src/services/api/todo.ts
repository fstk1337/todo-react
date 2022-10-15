import { AxiosInstance, AxiosResponse } from "axios";
const URL = '/todos';

export interface PoorTodo {
    _id: string,
    description: string,
    status: string
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
        create(payload: {description: string, status: string }) {
            return instance.post(`${URL}`, payload);
        },
        update(payload: PoorTodo) {
            return instance.patch(`${URL}/${payload._id}`, payload);
        },
        delete(todoId: string) {
            return instance.delete(`${URL}/${todoId}`);
        },
        toggleCompleted(payload: PoorTodo) {
            const status = payload.status === 'completed' ? 'active' : 'completed';
            return instance.patch(`${URL}${payload._id}`, {...payload, status});
        }
    };
};

export default todoModule;
