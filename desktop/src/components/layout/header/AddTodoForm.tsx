
import NewTodoInput from '../../input/NewTodoInput';
import AddTodoButton from '../../button/AddTodoButton';
import { ChangeEvent, EventHandler, FormEvent, FormEventHandler, useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledForm = styled('form')`
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const AddTodoForm = () => {
    const [todoText, setTodoText] = useState('');

    const handleChange: EventHandler<ChangeEvent> = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(todoText);
        setTodoText(event.target.value);
    };

    const handleSubmit:FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log('submit');
    };

    return (
        <StyledForm onSubmit={(event: FormEvent) => handleSubmit(event)}>
            <NewTodoInput onChange={(event: ChangeEvent) => handleChange(event)} />
            <AddTodoButton />
        </StyledForm>
    );
};

export default AddTodoForm;