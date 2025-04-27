import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppView from '../components/gloobal/AppView'
import AppText from '../components/gloobal/Apptext'
import MessageItem from '../components/chat/messageItem'
import ChatData, { ChatMessageType } from '@/lib/constanrs'
import ChatInput from '../components/chat-search'
import ChatHeader from '../components/chat/chatHeader'
import EmptyChatView from '../components/chat/emptyChatView'

const ChatScreen = () => {
    const errorMessage: string = "Coversation is not started! or not available! "
    return (
        <AppView style={styles.containerStyle} >
            <ChatHeader />

            {(ChatData.length > 0) && <FlatList
                data={[...ChatData, ...ChatData, ...ChatData, ...ChatData]}
                keyExtractor={(item: ChatMessageType, index: number) => index.toString()}
                renderItem={({ item }: { item: ChatMessageType }) => <MessageItem message={item} />}
                contentContainerStyle={{ gap: 18 }}
            />}


            {(!ChatData || ChatData.length <= 0) && <EmptyChatView title={errorMessage} />}
            <ChatInput />
        </AppView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    containerStyle: {
        gap: 10
    }
})