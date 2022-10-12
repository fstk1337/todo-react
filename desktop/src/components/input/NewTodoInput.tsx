import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)`
    & input {
        font-family: 'Roboto', Verdana, sans-serif;
        font-weight: 500;
        font-size: 16px;
    }
`;

const NewTodoInput = () => {
    return (
        <StyledTextField variant='outlined' label='New Todo' />
    );
};

export default NewTodoInput;