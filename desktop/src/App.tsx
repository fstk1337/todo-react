import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import './App.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MainHeading from './components/heading/MainHeading';
import TodoList from './components/layout/content/TodoList';
import TodoListWrapper from './components/layout/content/TodoListWrapper';
import AddTodoForm from './components/layout/header/AddTodoForm';
import Header from './components/layout/header/Header';
import instance from './services/api';

const Window = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;


const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    instance.get('/todos')
      .then((response) => {
        const data = response.data.todos;
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(() => {
    getTodos();
  }, []);


  

  return (
    <Window>
      <Header Icon={<AddCircleOutlineIcon />} Heading={<MainHeading text="Today's todo list" />} Form={<AddTodoForm />} />
      <TodoListWrapper todoList={<TodoList todos={todos}/>} />
    </Window>
  );
};

export default App;