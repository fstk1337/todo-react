import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';
import './App.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MainHeading from './components/heading/MainHeading';
import TodoItem from './components/layout/content/TodoItem';
import TodoList from './components/layout/content/TodoList';
import TodoListWrapper from './components/layout/content/TodoListWrapper';
import AddTodoForm from './components/layout/header/AddTodoForm';
import Header from './components/layout/header/Header';

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
      <Header Icon={<AddCircleOutlineIcon />} Heading={<MainHeading text="Today's todo list" />} Form={<AddTodoForm />} />
      <TodoListWrapper todoList={<TodoList todos={todos}/>} />
    </Window>
  );
};

export default App;