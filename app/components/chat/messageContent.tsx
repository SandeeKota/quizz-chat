import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../gloobal/Apptext'
import { COLORS } from '@/lib/colors'

interface Props {
    title: string
}
const MessageText: React.FC<Props> = ({ title }) => {
    return (
        <AppText title={title} size={14} style={{ ...styles.messageText }} />
    )
}

export default MessageText

const styles = StyleSheet.create({
    messageText: {
        color: COLORS.black
    }
})