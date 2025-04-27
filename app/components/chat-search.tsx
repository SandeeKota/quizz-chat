import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppInput from './gloobal/input'
import { COLORS } from '@/lib/colors'
import AppButton from './gloobal/AppButton'
import AppText from './gloobal/Apptext'

const ChatInput = () => {

    const [message, setMessage] = useState<string>("");

    const handleSubmit = () => {
        setMessage("");
    }

    return (
        <View style={[styles.inputContainer]} >
            <TextInput
                multiline
                placeholder="Type a message"
                style={styles.input}
                placeholderTextColor={COLORS.green}
                value={message}
                onChangeText={(text: string) => setMessage(text)}
            />
            {
                (message?.trim()?.length > 0) && <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={[styles.sendButton]} >
                    <AppText title='>' size={30} style={{ color: "#FFF" }} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: COLORS.green,
        borderRadius: 10,
        width: "100%",
        gap: 10,
        overflow: "hidden",
        paddingVertical: 5
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        color: COLORS.green,
        overflow: "hidden",
        paddingHorizontal: 10,
        maxHeight: 120,
        flex: 1,
        fontSize: 16
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: COLORS.blue,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    }
})