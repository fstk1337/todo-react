import './App.css';
import Header from './components/layout/header/Header';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MainHeading from './components/heading/MainHeading';
import AddTodoForm from './components/layout/header/AddTodoForm';
import TodoList from './components/layout/main/TodoList';

const App = () => {
  
  return (
    <>
      <Header
        Icon={<AddCircleOutlineIcon />}
        Heading={<MainHeading text="Today's todo list" />}
        Form={<AddTodoForm />} />
      <TodoList />
    </>
  );
};

export default App;