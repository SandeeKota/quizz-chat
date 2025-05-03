import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppView from '../components/gloobal/AppView'
import AppText from '../components/gloobal/Apptext'
import Avtar from '../components/gloobal/avtar'
import AppButton from '../components/gloobal/AppButton'
import { useRouter } from 'expo-router'
import { COLORS } from '@/lib/colors'
import AppIndex from '..'
import AppInput from '../components/gloobal/input'
import { LocalDimenstions } from '@/utils/window.util'
import { loginApi } from '@/utils/auth/auth.service'
import { UserLoginResponse } from '@/_types/response/response.types'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/store/authSlice'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isDirty, setIsDirty] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [form, setForm] = useState<{ email: string, password: string }>({ email: "", password: "" });

    const handleLogin = async () => {
        if (!form.email || !form.password || !form.password?.trim() || !form.email?.trim()) {
            Alert.alert("Please enter email and password")!
        } else {
            const res: UserLoginResponse | boolean = await loginApi(form.email, form.password);

            setForm({ email: "", password: "" });
            if (!res) {
                setError(true);
            }
            if (res && typeof res === "object" && "token" in res && "user" in res) {
                setError(false);
                dispatch(loginSuccess({ token: res.token, user: res.user, isAuthenticated: true }));
                router.replace("/quizz");
            }
        }
    }

    return (
        <AppView style={{ alignItems: "center", justifyContent: "center" }} >
            <AppText title={"Login"} size={20} style={styles.header} />
            <View style={{ alignItems: "center" }} >
                <Avtar src='' size={60} />
                <View style={styles.formConatiner} >
                    <View style={styles.formfilds} >
                        <AppText title="Email* / Mobile*" />
                        <AppInput
                            placeholder='Enter email or mobile'
                            onChnageText={(text) => setForm({ ...form, email: text })}
                            value={""}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.formfilds} >
                        <AppText title="Password*" />
                        <AppInput placeholder='Password'
                            onChnageText={(text) => setForm({ ...form, password: text })}
                            value={""}
                            style={styles.input}
                        />
                    </View>
                    {
                        (error) && <AppText title="Something went wrong" size={14}
                            style={{ width: LocalDimenstions.windowWidth - 200, textAlign: "center", color: "red" }} />
                    }
                    <AppButton
                        onPress={() => handleLogin()}
                        style={[styles.button, { opacity: isDirty ? 0.5 : 1 }]}
                    >
                        <AppText title="Login" size={18}
                            style={{ width: LocalDimenstions.windowWidth - 200, textAlign: "center" }} />
                    </AppButton>
                    <View style={{ flexDirection: "row", alignItems: "center", }} >
                        <AppText title="I don't have an account.?" size={14}
                            style={{ width: LocalDimenstions.windowWidth - 200, textAlign: "center", color: "red" }} />
                        <AppButton
                            onPress={() => router.replace("/signup")}
                        >
                            <AppText title="signup" size={18}
                                style={{ textAlign: "center", color: COLORS.blue, textDecorationLine: "underline" }} />
                        </AppButton>
                    </View>
                </View>
            </View>
        </AppView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        marginVertical: 20
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.green,
        padding: 10,
        width: "60%"
    },
    input: {
        width: LocalDimenstions.windowWidth - 80,
    },
    formConatiner: {
        gap: 20,
        alignItems: "center"
    },
    formfilds: {
        gap: 5
    }
})