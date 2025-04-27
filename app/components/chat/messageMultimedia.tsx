import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageText from './messageContent'

const MessageMultimedia = () => {
    return (
        <View>
            <MessageText title={"file name"} />
            <Image source={require("./../../../assets/images/react-logo.png")} style={[styles.imageStyle]} />
        </View>
    )
}

export default MessageMultimedia

const styles = StyleSheet.create({
    imageStyle: {
        maxWidth: 200
    }
})