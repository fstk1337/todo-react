import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, EventHandler, FC, useState } from 'react';

const StyledTextField = styled(TextField)`
    margin-right: 10px;
    width: 100%;
    & input {
        font-family: 'Roboto', Verdana, sans-serif;
        font-weight: 400;
        font-size: 18px;
    }
`;

interface NewTodoInputProps {
    text: string,
    onChange: Function
};

const NewTodoInput: FC<NewTodoInputProps> = (props) => {

    return (
        <StyledTextField variant='outlined' value={props.text} label='New Todo' onChange={event => props.onChange(event)}/>
    );
};

export default NewTodoInput;