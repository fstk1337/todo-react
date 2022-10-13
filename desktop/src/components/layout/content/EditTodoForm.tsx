import EditTodoInput from '../../input/EditTodoInput';
import { ChangeEvent, EventHandler, FC, FormEvent, FormEventHandler, useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledForm = styled('form')`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 30px;
    width: 100%;
`;

interface EditTodoFormProps {
    text: string,
};

const EditTodoForm: FC<EditTodoFormProps> = (props) => {
    const [todoText, setTodoText] = useState(props.text);

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
            <EditTodoInput text={todoText} onChange={(event: ChangeEvent) => handleChange(event)} />
        </StyledForm>
    );
};

export default EditTodoForm;