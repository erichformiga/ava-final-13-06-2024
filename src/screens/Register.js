import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firebase from 'firebase/app';
import 'firebase/auth';

function Register ({ navigation }) {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    
    const handleRegister = () => {
        firebase.auth().createUserWithEmailPassword(email, Password)
        .then(() => {
            navigation.replace('Login');
        })
        .catch(error => {
            Alert.alert(error.message);
        });
    };
    
    return (
        <View>
        <TextInput label="Email" value={email} onChangeText={setEmail} />
        <TextInput label="Password" value={password} secureTextEntry onChangeText={setPassword} />
        <Button mode="contained" onPress={handleRegister}>Register</Button>
        </View>
    );
}

export default Register;