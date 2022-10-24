import { Box, FlatList } from "native-base";
import TodoItem from "./TodoItem";

const data = {
    "todos": [
      {
        "_id": "634e76a8a6918381b0ef68a3",
        "category": "general",
        "description": "Load up on guns",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:49:28.553Z",
        "updatedAt": "2022-10-18T15:10:19.025Z"
      },
      {
        "_id": "634e76aea6918381b0ef68a6",
        "category": "general",
        "description": "And bring your friends",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:49:34.999Z",
        "updatedAt": "2022-10-18T15:10:20.921Z"
      },
      {
        "_id": "634e76c3a6918381b0ef68ab",
        "category": "general",
        "description": "It's fun to lose",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:49:55.046Z",
        "updatedAt": "2022-10-18T15:10:21.571Z"
      },
      {
        "_id": "634e76c6a6918381b0ef68ae",
        "category": "general",
        "description": "And to pretend",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:49:58.332Z",
        "updatedAt": "2022-10-18T15:10:35.365Z"
      },
      {
        "_id": "634e76d4a6918381b0ef68b1",
        "category": "general",
        "description": "I found it hard",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:50:12.557Z",
        "updatedAt": "2022-10-18T15:10:23.191Z"
      },
      {
        "_id": "634e76d9a6918381b0ef68b4",
        "category": "general",
        "description": "It's hard to find",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:50:17.735Z",
        "updatedAt": "2022-10-18T15:10:24.800Z"
      },
      {
        "_id": "634e76eaa6918381b0ef68b7",
        "category": "general",
        "description": "Oh well whatever nevermind",
        "priority": "normal",
        "started": "1970-01-01T00:00:00.000Z",
        "deadline": "1970-01-01T00:00:00.000Z",
        "status": "active",
        "finished": "1970-01-01T00:00:00.000Z",
        "createdAt": "2022-10-18T09:50:34.332Z",
        "updatedAt": "2022-10-18T15:10:25.479Z"
      }
    ]
  };

const TodoList = () => {
    return (
        <FlatList bg='#ddd' padding={5} borderRadius={10} data={data.todos} renderItem={({item}) => 
            <Box>
                <TodoItem text={item.description} />
            </Box>
        }
        />
    );
};

export default TodoList;