import { styled } from '@mui/material/styles';
import { FC } from 'react';

const StyledHeading = styled('h1')`
    font-size: 30px;
    padding: 20px;
`;

interface HeadingProps {
    text: string
}

const Heading: FC<HeadingProps> = ({ text }) => {
    return (
        <StyledHeading>{ text }</StyledHeading>
    );
};

export default Heading;