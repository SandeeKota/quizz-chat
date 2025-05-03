import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeToken, saveTocken } from '@/utils/storage/storage';
import { UserModal } from '@/_types/user.types';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    user: UserModal
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    user: {} as UserModal
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<Partial<AuthState>>) {
            state.token = action.payload.token || "";
            state.isAuthenticated = true;
            state.user = action.payload.user || {} as UserModal;
            saveTocken(action.payload.token || "");
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            removeToken();
        },
        loadToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
            state.isAuthenticated = !!action.payload;
        }
    },
});

export const { loginSuccess, logout, loadToken } = authSlice.actions;
export default authSlice.reducer;
