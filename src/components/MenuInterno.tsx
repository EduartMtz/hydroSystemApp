import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { appTheme } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const MenuInterno = ( {navigation} : DrawerContentComponentProps ) => {

    const assets: string = './../../assets/';

    const { authState } = useContext( AuthContext );

    return(
        <DrawerContentScrollView>
            <View
                style={ appTheme.avatarContainer }
            >
                <Image
                    style={ appTheme.avatar }
                    source={
                        ( !authState.isLoggenIn || authState.favoriteImage == undefined )
                        ? { uri: authState.favoriteImage }
                        : { uri: authState.favoriteImage }
                    }
                />
                <Text
                    style={ appTheme.title }
                >
                    { 
                        ( authState.isLoggenIn ) && authState.username
                    }
                </Text>
            </View>
            <View
                style={ appTheme.menuContainer }
            >
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("MaterialBottomNavigator") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        HidroSystem
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("Settings") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Settings
                    </Text>
                </TouchableOpacity>
                
            </View>
        </DrawerContentScrollView>
    );
}