import { Platform } from "react-native";

const createBoxShadow = (
    xOffset: number,
    yOffset: number,
    shadowColor: string,
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number,
    shadowColorAndroid: string
) => {
    if (Platform.OS === 'ios') {
        return {
            shadowColor,
            shadowOffset: {
                width: xOffset,
                height: yOffset
            },
            shadowOpacity,
            shadowRadius
        };
    } else if (Platform.OS === 'android') {
        return {
            elevation,
            shadowColor: shadowColorAndroid
        };
    }
    return {};
};

export default createBoxShadow;