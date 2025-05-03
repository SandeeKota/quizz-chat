import { KeyboardType, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '@/lib/colors'
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

interface Props {
    placeholder: string,
    value: string,
    onChnageText: (text: string) => void,
    style?: TextStyle,
    numberOfLines?: number,
    keyboarTyepe?: KeyboardType
}
const AppInput: React.FC<Props> = ({ placeholder, onChnageText, value = "Enter text",
    style, numberOfLines = 1, keyboarTyepe = "default" }) => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        if (!text || text.trim()?.length <= 0) {
            setText(value);
        }
        onChnageText(text);
    }, [text]);


    return (
        <TextInput
            multiline={false}
            numberOfLines={numberOfLines}
            keyboardType={keyboarTyepe}
            placeholder={placeholder}
            onChangeText={(text) => setText(text.trimStart())}
            value={text}
            style={[{ ...styles.input, ...style }]}
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