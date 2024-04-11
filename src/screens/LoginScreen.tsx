import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { useLogin } from '../hooks/useLogin';

export const LoginScreen = () => {

    const { 
        loading, 
        state, 
        handleInputChange, 
        handleLogin,
        request
    } = useLogin();

    const handleGetAccount = () => {
        Alert.alert(
            "Email y contraseña",
            "Email: Inver@hidroponics.com\nContraseña: siemprecuervos",
            [
            {
                text: "OK",
            },
            ],
            { cancelable: false }
        );
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/favicon.png')}
            />
            <View style={styles.formContainer}>
                {
                    ( !loading ) && 
                    <ActivityIndicator 
                        style={{ height: 100 }}
                        size={ 100 }
                        color="lime"
                    />
                }
                {
                    (request === false) &&
                    <Text 
                        style={styles.errorMessage}
                    >
                        {'Contraseña incorrecta \n' +
                        'Envío de datos faltantes \n'}
                    </Text>
                }
                <TextInput
                    style={styles.input}
                    value={ state.correo }
                    onChangeText={ (text) => handleInputChange('correo', text) }
                    placeholder='Usuario'
                    keyboardType="email-address"
                    editable={ loading }
                />
                <TextInput
                    style={styles.input}
                    value={ state.password }
                    secureTextEntry={ true }
                    onChangeText={ (text) => handleInputChange('password', text) }
                    placeholder='Contraseña'
                    editable={ loading }
                />
                <TouchableOpacity
                    onPress={ handleLogin } 
                    disabled={ !loading }
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signupContainer}>
                <Text
                    style={styles.signupText}
                >
                    ¿Nuevo usuario?
                </Text>
                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={handleGetAccount}
                >
                    <Text
                        style={styles.signupButtonText}
                    >
                        Obtener cuenta
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'c',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    label: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 5,
        color: 'black'
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        color: 'black', // Cambiando el color del texto a lime
    },
    button: {
        backgroundColor: 'black',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    signupContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20 ,
        color: 'black'
    },
    signupText: {
        fontSize: 20,
        color: 'black'
    },
    signupButton:{
        height: 20,
        width: '100%',
        justifyContent: 'center',  
    },
    signupButtonText:{
        fontSize: 15,
        textAlign: 'center',
        color: 'black'
    },
    image: {
        height:40,
        width:40
    },

    errorMessage:{
        textAlign:"center",
        fontSize: 20,
        marginBottom:10,
        color: 'red'
    }
});
