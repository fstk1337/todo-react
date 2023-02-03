import { FC } from 'react';

import { styled } from '@mui/material/styles';

const StyledHeading = styled('h1')`
    font-size: 30px;
    padding: 10px;
`;

interface MainHeadingProps {
    text: string
}

const MainHeading: FC<MainHeadingProps> = ({ text }) => {
    return (
        <StyledHeading>{text}</StyledHeading>
    );
};

export default MainHeading;