import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/gloobal/Apptext'
import AppView from '../components/gloobal/AppView'

interface Props {
    title: string
}
const ErrorPage: React.FC<Props> = ({ title = "Something Went Wrong" }) => {
    return (
        <AppView style={styles.container} >
            <AppText title={title} />
        </AppView>
    )
}

export default ErrorPage

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
    }
})