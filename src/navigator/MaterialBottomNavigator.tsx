import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Tab1Screen } from "../screens/Tab/Tab1Screen";
import { Tab2Screen } from "../screens/Tab/Tab2Screen";
import { Tab3Screen } from "../screens/Tab/Tab3Screen";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { colorsTheme } from "../themes/appTheme";


export type RootTabBottomParams = {
    Tab1Screen: undefined;
    Tab2Screen: undefined;
    Tab3Screen: undefined;
    MaterialTopNavigator: undefined;
    StackNavigator: undefined;
}

const Tab = createMaterialBottomTabNavigator<RootTabBottomParams>();

export const MaterialBottomNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName="Tab1Screen"
            sceneAnimationEnabled={ true }
            activeColor={ colorsTheme.secondary }
            inactiveColor={ colorsTheme.primary}
            labeled={true} // Mostrar label
            barStyle={{
                borderTopWidth: 2,
                borderTopColor: colorsTheme.secondary,
                paddingBottom: 0,
                backgroundColor: colorsTheme.background,
                elevation: 0,
            }}
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = "";
                    switch( route.name ){
                        case 'Tab1Screen':
                            iconName = 'home';
                            break;
                        case 'Tab2Screen':
                            iconName = 'bar-chart-o';
                            break;
                        case 'Tab3Screen':
                            iconName = 'user';
                            break;
                    }
                        return  <FontAwesome name={iconName} size={24} color={ color } />
                }
            })}
        >
            <Tab.Screen
                name="Tab1Screen"
                options={{ title: "",
                }}
                component={ Tab1Screen }
            />
            <Tab.Screen
                name="Tab2Screen"
                options={{ title: "" }}
                component={ Tab2Screen }
            />
            <Tab.Screen
                name="Tab3Screen"
                options={{ title: "" }}
                component={ Tab3Screen }
            />
        </Tab.Navigator>
    );
}