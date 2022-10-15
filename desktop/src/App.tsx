import { styled } from '@mui/material/styles';
import './App.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MainHeading from './components/heading/MainHeading';
import TodoList from './components/layout/content/TodoList';
import AddTodoForm from './components/layout/header/AddTodoForm';
import Header from './components/layout/header/Header';

const Window = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    padding-top: 10vh;
`;

const App = () => {
  
  return (
    <Window>
      <Header
        Icon={<AddCircleOutlineIcon />}
        Heading={<MainHeading text="Today's todo list" />}
        Form={<AddTodoForm />} />
      <TodoList />
    </Window>
  );
};

export default App;