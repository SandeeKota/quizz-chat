import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from './AppButton'
import AppText from './Apptext'
import { COLORS } from '@/lib/colors'

interface Props {
    size?: number,
    src: string,
}
const Avtar: React.FC<Props> = ({ size = 40, src }) => {
    return (
        <AppButton style={{ width: size, height: size, ...styles.avtarContainer }} >
            {(src && src?.trim()?.length > 0) ? <Image src={src} alt='👨‍🦰' /> : <AppText title={"👨‍🦰"} size={20} />}
        </AppButton>
    )
}

export default Avtar

const styles = StyleSheet.create({
    avtarContainer: {
        backgroundColor: COLORS.blue,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    }
})