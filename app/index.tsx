import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import AppView from './components/gloobal/AppView';
import { COLORS } from '@/lib/colors';
import { logout, loadToken } from '@/store/authSlice';
import { isTokenExpired } from '@/utils/jwt';
import { removeToken } from '@/utils/storage/storage';
import { getToken } from '@/utils/tokenManager';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from './hooks/useAuth';
import EntryScreen from './components/entryScreen';
import { RootState } from '@/store';

const AppIndex = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth();


    useEffect(() => {
        setTimeout(() => {
            const initializeAuth = async () => {
                const token = await getToken();

                if (!token || !token.trim()) {
                    setIsLoading(false);
                    router.replace("/login");
                    return;
                }

                if (isTokenExpired(token)) {
                    await removeToken();
                    dispatch(logout());
                    setIsLoading(false);
                    router.replace("/login");
                    return;
                }

                dispatch(loadToken(token));
                setIsLoading(false);
                router.replace("/quizz");
            };

            initializeAuth();
        }, 2000);
    }, []);

    return (
        <AppView style={styles.container} >
            <EntryScreen isLoding={isLoading} />
        </AppView>
    )
}

export default AppIndex

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.green,
        padding: 10,
        width: "60%"
    }
})