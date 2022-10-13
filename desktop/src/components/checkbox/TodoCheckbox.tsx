import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCheckbox = styled(Checkbox)`

`;

const label = { hello: 'yes' };

const TodoCheckbox = () => {
    return (
        <StyledCheckbox {...label} defaultChecked />
    );
};

export default TodoCheckbox;