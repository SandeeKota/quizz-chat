import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/lib/colors'

interface Props {
    style?: TextStyle,
    size?: number,
    title: string
}
const AppText: React.FC<Props> = ({ style, size = 16, title }) => {
    return (
        <Text
            style={[{ ...styles.textStyles, fontSize: size, color: COLORS.green, ...{ ...style } }]}
        >
            {title || ""}
        </Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    textStyles: {
        color: COLORS.green
    }
})