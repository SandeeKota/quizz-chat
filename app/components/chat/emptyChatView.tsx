import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../gloobal/Apptext'

interface Props {
    title: string
}

const EmptyChatView: React.FC<Props> = ({ title }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <AppText title={title} style={{ textAlign: "center", width: 250 }} size={20} />
        </View>
    )
}

export default EmptyChatView

const styles = StyleSheet.create({})