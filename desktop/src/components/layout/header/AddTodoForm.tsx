import NewTodoInput from '../../input/NewTodoInput';
import AddTodoButton from '../../button/AddTodoButton';
import { ChangeEvent, EventHandler, FormEvent, FormEventHandler, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../../../store/actions';

const StyledForm = styled('form')`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const AddTodoForm = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    const handleChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    const handleSubmit:FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        if (todoText.length > 0) {
            const newTodo = { _id: new Date().getMilliseconds().toString(), description: todoText, status: 'active'};
            dispatch({type: 'ADD_TODO', payload: {...newTodo}});
        };
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