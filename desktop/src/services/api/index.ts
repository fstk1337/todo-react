import instance from "./instance";
import todoModule from "./todo";

const api = todoModule(instance);
export default api;