import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avtar from '../gloobal/avtar'
import AppText from '../gloobal/Apptext'
import { COLORS } from '@/lib/colors'

const ChatHeader = () => {
    return (
        <View style={[styles.headerContainer]} >
            <AppText title='QPTIC-QUIZZ' size={22} style={styles.title} />
            <Avtar src={''} />
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    headerContainer: {
        maxWidth: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        justifyContent: "space-between",
        borderBottomColor: COLORS.green,
        paddingVertical: 8,
        borderBottomWidth: 1
    },
    title: {
        fontWeight: "600"
    }
})