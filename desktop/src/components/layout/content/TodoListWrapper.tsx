import { FC, ReactElement } from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TodoListWrapperProps {
    todoList: ReactElement
}

const StyledWrapper = styled(Container)`
    padding: 20px;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 20px;
    align-items: center;
    background: #11ccdd;
`;

const TodoListWrapper: FC<TodoListWrapperProps> = ({ todoList }) => {
  return (
    <StyledWrapper>
      { todoList }
    </StyledWrapper>
  )
};

export default TodoListWrapper;