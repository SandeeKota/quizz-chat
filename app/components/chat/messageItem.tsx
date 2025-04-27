import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../gloobal/Apptext'
import { COLORS } from '@/lib/colors'
import MessageText from './messageContent'
import MessageMultimedia from './messageMultimedia'
import AppButton from '../gloobal/AppButton'
import { ChatMessageType } from '@/lib/constanrs'

interface MessageItemProps {
    message: ChatMessageType
}
const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    const { isSelf } = message;
    const flexDirection = ((isSelf) ? "row-reverse" : "row");
    const boxColor = ((isSelf) ? COLORS.green : COLORS.blue);
    return (
        <AppButton style={{ ...styles.messageContainer, flexDirection: flexDirection }}  >
            <View style={[styles.messageBody, { backgroundColor: boxColor }]} >
                <MessageText title={message.content} />
                {/* <MessageMultimedia /> */}
            </View>
        </AppButton>
    )
}

export default MessageItem

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: "row"
    },
    messageBody: {
        backgroundColor: COLORS.green,
        color: COLORS.black,
        maxWidth: "90%",
        borderRadius: 8,
        padding: 8
    }
})