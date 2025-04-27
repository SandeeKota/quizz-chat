import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import EntryScreen from './components/entryScreen';

const RootNavigatore = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                router.replace("/quizz")
            }, 300);
        }, 300);
    }, []);

    if (isLoading) {
        return (
            <EntryScreen />
        )
    }

    return (
        <React.Fragment>
            <StatusBar
                backgroundColor="#000000" // Set your desired background color
                barStyle="light-content"
            />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </React.Fragment>
    )
}

export default RootNavigatore

const styles = StyleSheet.create({})