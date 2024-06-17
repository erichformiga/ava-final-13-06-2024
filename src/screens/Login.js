import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import firebase from 'firebase/app';
import 'firebase/auth';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.replace('App');
        })
        .catch(error => {
            Alert.alert(error.message);

        });
    };
    return (
        <view>
            <TextInput Label="Email" value={email} onChangeText={setEmail} />
            <TextInput Label="Password" value={password} secureTextEntry onChangeText={setPassword} />
            <Button mode="contained" onPress={handleLogin}>Login</Button>
            <Button onPress={() => navigation.navigate('Register')}>Register</Button>
        </view>
    );    
}

export default Login;