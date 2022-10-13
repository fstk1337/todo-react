import { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';

const StyledAccordion = styled(Accordion)`
    width: 400px;
    margin-bottom: 10px;
    border-radius:10px;
`;

interface HeaderProps {
    Icon: ReactNode,
    Heading: ReactNode,
    Form: ReactNode
}

const Header: FC<HeaderProps> = ({ Icon, Heading, Form }) => {
    return (
        <StyledAccordion>
            <AccordionSummary expandIcon={Icon}>
                { Heading }
            </AccordionSummary>
            <AccordionDetails>
                { Form }
            </AccordionDetails>
        </StyledAccordion>
    );
};

export default Header;