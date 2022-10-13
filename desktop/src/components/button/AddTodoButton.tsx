import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
    padding: 10px;
`;

const AddTodoButton = () => {

    return (
        <StyledButton variant="contained" type="submit">
            Add
        </StyledButton>
    );
};

export default AddTodoButton;