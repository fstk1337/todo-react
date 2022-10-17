import NewTodoInput from '../../input/NewTodoInput';
import AddTodoButton from '../../button/AddTodoButton';
import { ChangeEvent, EventHandler, FormEvent, FormEventHandler, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../../redux/store/hooks';
import { IPoorTodo } from '../../../services/api/todo.types';
import { addTodo } from '../../../redux/todos/thunks';

const StyledForm = styled('form')`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const AddTodoForm = () => {
    const dispatch = useAppDispatch();
    const [todoText, setTodoText] = useState('');

    const handleChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    const handleSubmit:FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        const newTodo:IPoorTodo = {
            _id: '-1',
            description: todoText,
            status: 'active',
        };
        dispatch(addTodo(newTodo));
        setTodoText('');
    };

    return (
        <StyledForm onSubmit={(event: FormEvent) => handleSubmit(event)}>
            <NewTodoInput text={todoText} onChange={handleChange} />
            <AddTodoButton disabled={todoText === ''} />
        </StyledForm>
    );
};

export default AddTodoForm;