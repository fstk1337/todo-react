import { Box } from "native-base";
import TodoList from "./TodoList";


const Content = () => {
    return (
        <Box flex={1} flexDirection='row' alignItems='center' px={10}>
            <TodoList />
        </Box>
    );
};

export default Content;