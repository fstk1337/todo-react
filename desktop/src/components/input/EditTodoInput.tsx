import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, EventHandler, FC, useState } from 'react';

const StyledTextField = styled(TextField)`
    margin-right: 10px;
    width: 80%;
    & input {
        font-family: 'Roboto', Verdana, sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
`;

interface EditTodoInputProps {
    text: string,
    onChange: EventHandler<ChangeEvent>
};

const EditTodoInput: FC<EditTodoInputProps> = (props) => {
    const [text, setText] = useState(props.text);

    const changeHandler = ((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setText(event.target.value);
        console.log(text);
    });

    return (
        <StyledTextField
            variant='standard'
            value={text}
            onChange={event => changeHandler(event)}
            InputProps={{ disableUnderline: true, autoFocus: true, }}
        />
    );
};

export default EditTodoInput;