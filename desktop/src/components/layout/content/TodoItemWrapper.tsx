import { FC, ReactElement } from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TodoItemWrapperProps {
    item: ReactElement
}

const StyledWrapper = styled(Container)`
    margin: 0;
    padding: 5px;
    width: 100%;
    align-items: center;
`;

const TodoItemWrapper: FC<TodoItemWrapperProps> = ({ item }) => {
  return (
    <StyledWrapper>
      { item }
    </StyledWrapper>
  )
};

export default TodoItemWrapper;
