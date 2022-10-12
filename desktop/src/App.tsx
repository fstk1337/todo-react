import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';
import './App.css';
import AddTodoButton from './components/button/AddTodoButton';
import Heading from './components/heading/Heading';
import TodoItem from './components/layout/main/TodoItem/TodoItem';
import TodoList from './components/layout/main/TodoList/TodoList';
import TodoListWrapper from './components/layout/main/TodoList/TodoListWrapper';

const todos: Array<ReactElement> = [
  <TodoItem id={1} text="Make me happy" />,
  <TodoItem id={2} text="Help me" />,
  <TodoItem id={3} text="Believe me" />,
  <TodoItem id={4} text="Please me" />,
  <TodoItem id={5} text="Connect me" />,
  <TodoItem id={6} text="Overdose with something" />,
  <TodoItem id={7} text="Just live" />
];

const Window = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

function App() {
  return (
    <Window>
      <Stack direction="row">
        <Heading text="Today's todo list" />
        <AddTodoButton />
      </Stack>
      <TodoListWrapper todoList={<TodoList todos={todos}/>} />
    </Window>
  );
};

export default App;
