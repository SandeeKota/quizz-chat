import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import AppText from './components/gloobal/Apptext';
import AppView from './components/gloobal/AppView';
import AppButton from './components/gloobal/AppButton';
import { COLORS } from '@/lib/colors';

const AppIndex = () => {
    const router = useRouter();

    return (
        <AppView style={styles.container} >
            <AppButton
                onPress={() => router.push("/quizz")}
                style={[styles.button]}
            >
                <AppText title="Let's Chat Now" />
            </AppButton>
        </AppView>
    )
}

export default AppIndex

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.green,
        padding: 10,
        width: "60%"
    }
})