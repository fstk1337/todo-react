import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from "native-base";

import App from "./src/components/App";

const Main = () => {
    return (
        <NativeBaseProvider>
            <App />
        </NativeBaseProvider>
    );
};

export default Main;

registerRootComponent(Main);