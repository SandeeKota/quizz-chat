import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTocken = async (token: string) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.error('Failed to save token:', error);
    }
}

export const getTocken = async () => {
    try {
        const token = await AsyncStorage.getItem("token") || "";
    } catch (error) {
        console.error('Failed to get token:', error);
        return null;
    }
}

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.error('Failed to remove token:', error);
    }
};