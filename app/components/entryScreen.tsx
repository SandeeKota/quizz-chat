import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppView from './gloobal/AppView'
import AppText from './gloobal/Apptext'
import Animated, { Easing, FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { COLORS } from '@/lib/colors';


const EntryScreen = () => {
    const scale = useSharedValue(0); // 👈 shared value for opacity
    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }), // zoom in to 120%
                withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })     // zoom out to 100%
            ),
            -1, // infinite loop
            true // reverse mode
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }], // 👈 apply scale transformation
    }));

    return (
        <AppView style={styles.container} >
            <AppText title='WELCOME' size={30} />
            <AppText title='TO' size={30} />
            <AppText title='QPTIC-QUIZZ' size={30} />

            <Animated.View
                style={[styles.loadingBox, animatedStyle]} // 👈 applying the scaling animation
                entering={FadeIn.duration(500)}
                exiting={FadeOut.duration(500)}
            >
                <Text style={styles.loadingText}>Loading...</Text>
            </Animated.View>
        </AppView>
    )
}

export default EntryScreen

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    loadingBox: {
        padding: 20,
        borderRadius: 8,
        marginTop: 20
    },
    loadingText: {
        fontSize: 20,
        color: COLORS.green,
        fontWeight: 'bold',
    },
})