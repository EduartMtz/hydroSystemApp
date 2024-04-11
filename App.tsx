    import React, {ReactNode} from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { DrawerNavigator } from './src/navigator/DrawerNavigator';
    import { AuthProvider } from './src/context/AuthContext';
    import { LoginScreen } from './src/screens/LoginScreen';

    const App = () => {
        return (
            <NavigationContainer>
                <AppState>
                <DrawerNavigator/>
                </AppState>
            </NavigationContainer>
            // <LoginScreen/>
        );
    }
    const AppState = ( { children }: {children: ReactNode} ) => {
    return(
        <AuthProvider>
            { children }
        </AuthProvider>
    );
    }

    export default App;
    