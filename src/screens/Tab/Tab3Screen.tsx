import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export const Tab3Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profilePicture} source={require('../../../assets/icon.png')} />
        <Text style={styles.name}>Nombre de Usuario</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});