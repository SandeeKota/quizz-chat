import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../../lib/api';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const signup = async () => {
        try {
            const res = await api.post('/signup', { email, password });

            if (res.data.success) {
                Alert.alert('Signup successful');
                router.push('/login');
            } else {
                Alert.alert('Signup failed');
            }
        } catch (error) {
            Alert.alert('Error during signup');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Signup" onPress={signup} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 100 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});
