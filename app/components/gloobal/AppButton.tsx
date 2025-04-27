import { StyleProp, StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS } from '@/lib/colors'

interface Props {
    style?: StyleProp<ViewStyle> | undefined,
    children: React.ReactNode,
    onPress?: (data?: any) => void
}
const AppButton: React.FC<Props> = ({ style, children, onPress }) => {
    return (
        <TouchableHighlight
            onPress={() => onPress && onPress()}
            style={style}
            underlayColor={COLORS.blue}
        >
            {children}
        </TouchableHighlight>
    )
}

export default AppButton

const styles = StyleSheet.create({})