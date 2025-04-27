import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/lib/colors'
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

interface Props {
    placeholder: string,
    value: string,
    onChnageText: (text: string) => void
}
const AppInput: React.FC<Props> = ({ placeholder, onChnageText, value = "Enter text" }) => {
    return (
        <TextInput
            placeholder={placeholder}
            onChangeText={onChnageText}
            value={value}
            style={[{ ...styles.input }]}
            placeholderTextColor={COLORS.green}
        />
    )
}

export default AppInput

const styles = StyleSheet.create({
    input: {
        borderColor: COLORS.green,
        borderWidth: 1,
        color: COLORS.green,
        paddingHorizontal: 10,
        width: "100%"
    }
});