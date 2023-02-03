import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const StyledTextField = styled(TextField)`
    min-width: 500px;
    margin-bottom: 20px;
    align-self: center;
    & input {
        font-family: 'Roboto', Verdana, sans-serif;
        font-weight: 400;
        font-size: 18px;
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
            InputProps={{ disableUnderline: false, autoFocus: true }}
        />
    );
};

export default EditTodoInput;