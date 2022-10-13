import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, EventHandler, FC } from 'react';

const StyledTextField = styled(TextField)`
    margin-right: 10px;
    & input {
        font-family: 'Roboto', Verdana, sans-serif;
        font-weight: 500;
        font-size: 16px;
    }
`;

interface NewTodoInputProps {
    onChange: EventHandler<ChangeEvent>
};

const NewTodoInput: FC<NewTodoInputProps> = (props) => {
    return (
        <StyledTextField variant='outlined' label='New Todo' onChange={props.onChange}/>
    );
};

export default NewTodoInput;