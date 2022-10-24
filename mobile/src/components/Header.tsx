import { StatusBar, Box } from "native-base";
import { FC } from "react";

interface HeaderProps {
    barStyle: 'default' | 'light-content' | 'dark-content'
    color: string
};

const Header:FC<HeaderProps> = (props) => {
    return (
        <>
            <StatusBar backgroundColor={ props.color } barStyle={ props.barStyle } />
            <Box safeAreaTop bg={ props.color } />
        </>
    );
};

export default Header;