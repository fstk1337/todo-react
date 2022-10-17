import { applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk"
import { TodoAction } from "../todos/actions";
import { IState } from "../todos/initialState";
import todoReducer from "../todos/reducer";

const configureStore = () => {
    const enhancers = compose(applyMiddleware<ThunkDispatch<IState, void, TodoAction>, IState>(thunk));
    const store = createStore(todoReducer(), enhancers);
    return store;
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;