import { UserSignUpResponse } from "@/_types/response/response.types";
import { SignupFormType, UserModal } from "@/_types/user.types";
import { COLORS } from "@/lib/colors";
import { loginSuccess } from "@/store/authSlice";
import { signupApi } from "@/utils/auth/auth.service";
import { LocalDimenstions } from "@/utils/window.util";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import AppButton from "../components/gloobal/AppButton";
import AppText from "../components/gloobal/Apptext";
import AppView from "../components/gloobal/AppView";
import Avtar from "../components/gloobal/avtar";
import AppInput from "../components/gloobal/input";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

export default function SignupScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm<SignupFormType>();
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const signup: SubmitHandler<SignupFormType> = async (data) => {
        try {
            const body: SignupFormType = {
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone
            };

            const res: UserSignUpResponse | boolean = await signupApi(body);

            if (!res || typeof res === 'boolean') {
                Alert.alert('Signup failed');
                setError(true);
            } else {
                dispatch(loginSuccess({ user: res.user, token: res.token, isAuthenticated: true }));
                router.replace("/quizz");
            }
        } catch (error) {
            Alert.alert('Error during signup');
        }
    };

    return (
        <AppView style={{ alignItems: "center", justifyContent: "center" }}>
            <AppText title={"Signup"} size={20} style={styles.header} />
            <View style={{ alignItems: "center" }}>
                <Avtar src='' size={60} />
                <View style={styles.formConatiner}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: 'Email is required', pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            }
                        }}
                        render={({ field }) => (
                            <View style={styles.formfilds}>
                                <AppText title="Email*" />
                                <AppInput
                                    placeholder='Email'
                                    onChnageText={field.onChange}
                                    value={""}
                                    keyboarTyepe="email-address"
                                    style={styles.input}
                                />
                                {errors.email && <AppText style={{ color: "red", width: LocalDimenstions.windowWidth - 100 }} size={12} title={errors.email.message || "Email is required"} />}
                            </View>
                        )}
                    />
                    <Controller
                        control={control}
                        name="name"
                        rules={{ required: 'min length is', minLength: 2 }}
                        render={({ field }) => (
                            <View style={styles.formfilds}>
                                <AppText title="Name*" />
                                <AppInput
                                    placeholder='Name'
                                    onChnageText={field.onChange}
                                    value={""}
                                    style={styles.input}
                                />
                                {errors.name && <AppText style={{ color: "red", width: LocalDimenstions.windowWidth - 100 }} size={12} title={errors.name.message || "Name is required"} />}
                            </View>
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
                                message: "Password must contain at least one capital letter and one special character"
                            }
                        }}
                        render={({ field }) => (
                            <View style={styles.formfilds}>
                                <AppText title="Password*" />
                                <AppInput
                                    placeholder='Password'
                                    onChnageText={field.onChange}
                                    value={field.value || ""}
                                    style={styles.input}
                                />
                                {errors.password && <AppText style={{ color: "red", width: LocalDimenstions.windowWidth - 100 }} size={12} title={errors.password.message || "Password is required"} />}
                            </View>
                        )}
                    />
                    <Controller
                        control={control}
                        name="phone"
                        rules={{ required: 'Phone number is required', minLength: { value: 10, message: 'min and max' }, maxLength: { value: 10, message: 'min and max 10 characters' } }}
                        render={({ field }) => (
                            <View style={styles.formfilds}>
                                <AppText title="Mobile*  (min 10 chars)" />
                                <AppInput
                                    placeholder='Mobile'
                                    onChnageText={field.onChange}
                                    value={""}
                                    style={styles.input}
                                />
                                {errors.phone && <AppText style={{ color: "red", width: LocalDimenstions.windowWidth - 100 }} size={12} title={errors.phone.message || "Phone number is required"} />}
                            </View>
                        )}
                    />
                    {error && (
                        <AppText title="Something went wrong!" size={14} style={{ color: "red", width: LocalDimenstions.windowWidth - 100, textAlign: "center" }} />
                    )}
                    <AppButton
                        onPress={handleSubmit(signup)}
                        style={styles.button}
                    >
                        <AppText title="Signup" size={18} style={{ width: LocalDimenstions.windowWidth - 200, textAlign: "center" }} />
                    </AppButton>
                </View>
            </View>
        </AppView>
    );
};
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
});
