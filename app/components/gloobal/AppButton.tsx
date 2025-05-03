import { StyleProp, StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS } from '@/lib/colors'

interface Props {
    style?: StyleProp<ViewStyle> | undefined,
    children: React.ReactNode,
    onPress?: (data?: any) => void,
    disabled?: boolean
}
const AppButton: React.FC<Props> = ({ style, children, onPress, disabled = false }) => {
    return (
        <TouchableHighlight
            onPress={() => onPress && onPress()}
            style={style}
            underlayColor={COLORS.blue}
            disabled={disabled}
        >
            {children}
        </TouchableHighlight>
    )
}

export default AppButton

const styles = StyleSheet.create({})