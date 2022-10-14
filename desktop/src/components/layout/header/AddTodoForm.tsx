import NewTodoInput from '../../input/NewTodoInput';
import AddTodoButton from '../../button/AddTodoButton';
import { ChangeEvent, EventHandler, FormEvent, FormEventHandler, useState } from 'react';
import { styled } from '@mui/material/styles';
import api from '../../../services/api';
import { PoorTodo } from '../../../services/api/todo';

const StyledForm = styled('form')`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const AddTodoForm = () => {
    const [todoText, setTodoText] = useState('');

    const handleChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    const addNewTodo = (async(todo: PoorTodo) => {
        const result = await api.create(todo);
        console.log(result.data.todo);
    });

    const handleSubmit:FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        setTodoText('')
        if (todoText.length > 0) {
            const newTodo: PoorTodo = {
                _id: '-1',
                description: todoText
            };
            addNewTodo(newTodo);
        }
    };

    return (
        <StyledForm onSubmit={(event: FormEvent) => handleSubmit(event)}>
            <NewTodoInput text={todoText} onChange={handleChange} />
            <AddTodoButton disabled={todoText === ''} />
        </StyledForm>
    );
};

export default AddTodoForm;