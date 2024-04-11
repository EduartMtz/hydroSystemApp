import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { Settings } from '../screens/stack/Settings';
import { MaterialBottomNavigator } from './MaterialBottomNavigator';



export type RootStackParamsDrawer = {
    Settings: undefined;
    MaterialBottomNavigator: undefined;
}

const Drawer = createDrawerNavigator<RootStackParamsDrawer>();

export const DrawerNavigator = () => {

    const { width }  = useWindowDimensions();

    return(
        <Drawer.Navigator
            initialRouteName="MaterialBottomNavigator"
            screenOptions={{
                headerShown: true,
                drawerType: width >= 768 ? 'permanent' : 'front',
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: 'rgba(11, 77, 160,0.7)',
                    width: width * 0.7,
                },
                headerStyle: {
                    height: 60,
                },
            }}
            //drawerContent={ (props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen
                name="MaterialBottomNavigator"
                options={{ title:"HidroSystem" }}
                component={ MaterialBottomNavigator }
            />
            <Drawer.Screen
                name="Settings"
                options={{ title:"Settings" }}
                component={ Settings }
            />
            
        </Drawer.Navigator>
    );
}