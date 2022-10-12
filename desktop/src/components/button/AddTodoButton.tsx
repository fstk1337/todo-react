import { IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled } from '@mui/material/styles';

const StyledButton = styled(IconButton)`
    padding: 10px;
    color: red;
`;

const AddTodoButton = () => {
    const handleAddButtonClick = () => {
        console.log('add button clicked');
    };

    return (
        <StyledButton onClick={handleAddButtonClick}>
            <AddCircleOutlineIcon />
        </StyledButton>
    );
};

export default AddTodoButton;