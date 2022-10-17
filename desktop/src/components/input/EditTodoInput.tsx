import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, EventHandler, FC, useState } from 'react';

const StyledTextField = styled(TextField)`
    margin-right: 10px;
    min-width: 350px;
    & input {
        font-family: 'Roboto', Verdana, sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
`;

interface EditTodoInputProps {
    text: string,
    onChange: Function
};

const EditTodoInput: FC<EditTodoInputProps> = (props) => {

    return (
        <StyledTextField
            variant='standard'
            value={props.text}
            onChange={(event) => props.onChange(event)}
            InputProps={{ disableUnderline: true, autoFocus: true, }}
        />
    );
};

export default EditTodoInput;