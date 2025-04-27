import ChatScreen from '@/app/chat';
import LoginScreen from '@/app/login';
import SignupScreen from '@/app/signup';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

// Define the type for Screen Items
export type ScreenItem = {
    name: 'Login' | 'Signup' | 'Chat';
    component: React.ComponentType<any>;
    options?: NativeStackNavigationOptions;
};

// List of screens
export const screens: readonly ScreenItem[] = [
    { name: 'Login', component: LoginScreen },
    { name: 'Signup', component: SignupScreen },
    { name: 'Chat', component: ChatScreen },
] as const;
