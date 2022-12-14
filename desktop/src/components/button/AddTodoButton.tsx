import { FC } from 'react';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
    padding: 10px;
`;

interface AddTodoButtonProps {
    disabled: boolean
}

const AddTodoButton:FC<AddTodoButtonProps> = (props) => {
    return (
        <StyledButton variant="contained" type="submit" disabled={props.disabled}>
            Add
        </StyledButton>
    );
};

export default AddTodoButton;