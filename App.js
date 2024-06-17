import React, { useEffect } from "react";
import { View } from "react-native-web";
import AppNavigator from "./src/navigation/AppNavigation";
import AuthNavigator from "./src/navigation/AuthNavigator";
import firebase from 'firebase/app';
import 'firebase/auth';

export default function App() {
    const [isAuthenticated, isIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <View Style={{ flex: 1 }}>
            {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </View>
    )
}