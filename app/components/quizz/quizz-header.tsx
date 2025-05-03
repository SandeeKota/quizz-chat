import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppView from '../gloobal/AppView'
import AppText from '../gloobal/Apptext'
import { COLORS } from '@/lib/colors'
import { LocalDimenstions } from '@/utils/window.util'
import AppButton from '../gloobal/AppButton'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/authSlice'
import { useRouter } from 'expo-router'

const QuizzHeader = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.replace("/");
    }

    return (
        <View style={[styles.headerContainer]} >
            <AppText title={"QUIZZ"} style={styles.title} size={15} />
            <AppButton
                onPress={() => handleLogout()}
                style={{ width: 80, alignItems: "center", justifyContent: "center", marginRight: 10 }}
            >
                <AppText title="Logout" size={18}
                    style={{ width: LocalDimenstions.windowWidth - 200, textAlign: "center", color: "red" }} />
            </AppButton>
        </View>
    )
}

export default QuizzHeader

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.blue,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    title: {
        color: COLORS.black,
        fontWeight: "600",
        marginTop: 3
    }
})