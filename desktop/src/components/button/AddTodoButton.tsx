import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
    font-weight: 500;
    font-size: 16px;
`;

const AddTodoButton = () => {
    return (
        <StyledButton variant='contained' size='small'>Add</StyledButton>
    );
};

export default AddTodoButton;